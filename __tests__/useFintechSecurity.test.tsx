import React, { useEffect } from 'react';
import ReactTestRenderer, { act } from 'react-test-renderer';
import useFintechSecurity from '../src/features/FintechSecurity/aplication/hooks/useFintechSecurity';
import { FintechSecurityService } from '../src/core/security';

jest.mock('../src/core/security', () => ({
  FintechSecurityService: {
    getIdentifier: jest.fn(),
  },
}));

type HookState = {
  identifier: string;
  isLoading: boolean;
  error: string | null;
  refresh: () => Promise<void>;
};

function HookHarness({ onChange }: { onChange: (state: HookState) => void }) {
  const state = useFintechSecurity();

  useEffect(() => {
    onChange(state);
  }, [onChange, state]);

  return null;
}

async function flushMicrotasks() {
  await act(async () => {
    await new Promise(resolve => setImmediate(resolve));
  });
}

describe('useFintechSecurity', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('carga el identificador al montar y limpia el estado de carga', async () => {
    (FintechSecurityService.getIdentifier as jest.Mock).mockResolvedValue('device-abc');
    const snapshots: HookState[] = [];

    await act(async () => {
      ReactTestRenderer.create(<HookHarness onChange={state => snapshots.push(state)} />);
    });

    await flushMicrotasks();

    const latest = snapshots[snapshots.length - 1];
    expect(FintechSecurityService.getIdentifier).toHaveBeenCalledTimes(1);
    expect(latest.identifier).toBe('device-abc');
    expect(latest.isLoading).toBe(false);
    expect(latest.error).toBeNull();
  });

  it('guarda el error cuando el servicio falla', async () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => undefined);
    (FintechSecurityService.getIdentifier as jest.Mock).mockRejectedValue(new Error('service boom'));
    const snapshots: HookState[] = [];

    await act(async () => {
      ReactTestRenderer.create(<HookHarness onChange={state => snapshots.push(state)} />);
    });

    await flushMicrotasks();

    const latest = snapshots[snapshots.length - 1];
    expect(FintechSecurityService.getIdentifier).toHaveBeenCalledTimes(1);
    expect(latest.identifier).toBe('');
    expect(latest.isLoading).toBe(false);
    expect(latest.error).toBe('service boom');
    consoleSpy.mockRestore();
  });

  it('refresh obtiene un nuevo valor de identificador', async () => {
    (FintechSecurityService.getIdentifier as jest.Mock)
      .mockResolvedValueOnce('first-id')
      .mockResolvedValueOnce('second-id');

    const snapshots: HookState[] = [];

    await act(async () => {
      ReactTestRenderer.create(<HookHarness onChange={state => snapshots.push(state)} />);
    });

    await flushMicrotasks();

    const beforeRefresh = snapshots[snapshots.length - 1];
    expect(beforeRefresh.identifier).toBe('first-id');

    await act(async () => {
      await beforeRefresh.refresh();
    });

    await flushMicrotasks();

    const afterRefresh = snapshots[snapshots.length - 1];
    expect(FintechSecurityService.getIdentifier).toHaveBeenCalledTimes(2);
    expect(afterRefresh.identifier).toBe('second-id');
    expect(afterRefresh.isLoading).toBe(false);
    expect(afterRefresh.error).toBeNull();
  });

  it('muestra carga mientras la peticion esta pendiente y la limpia al resolver', async () => {
    let resolveIdentifier: ((value: string) => void) | undefined;
    (FintechSecurityService.getIdentifier as jest.Mock).mockImplementation(
      () =>
        new Promise<string>(resolve => {
          resolveIdentifier = resolve;
        }),
    );

    const snapshots: HookState[] = [];

    await act(async () => {
      ReactTestRenderer.create(<HookHarness onChange={state => snapshots.push(state)} />);
    });

    await flushMicrotasks();

    expect(FintechSecurityService.getIdentifier).toHaveBeenCalledTimes(1);
    expect(snapshots.some(state => state.isLoading)).toBe(true);

    await act(async () => {
      resolveIdentifier?.('pending-id');
    });

    await flushMicrotasks();

    const latest = snapshots[snapshots.length - 1];
    expect(latest.identifier).toBe('pending-id');
    expect(latest.isLoading).toBe(false);
    expect(latest.error).toBeNull();
  });

  it('limpia el error previo cuando refresh se recupera despues de una falla', async () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => undefined);
    (FintechSecurityService.getIdentifier as jest.Mock)
      .mockRejectedValueOnce(new Error('primer fallo'))
      .mockResolvedValueOnce('recovered-id');

    const snapshots: HookState[] = [];

    await act(async () => {
      ReactTestRenderer.create(<HookHarness onChange={state => snapshots.push(state)} />);
    });

    await flushMicrotasks();

    const afterFailure = snapshots[snapshots.length - 1];
    expect(afterFailure.error).toBe('primer fallo');
    expect(afterFailure.isLoading).toBe(false);

    await act(async () => {
      await afterFailure.refresh();
    });

    await flushMicrotasks();

    const afterRecovery = snapshots[snapshots.length - 1];
    expect(FintechSecurityService.getIdentifier).toHaveBeenCalledTimes(2);
    expect(afterRecovery.identifier).toBe('recovered-id');
    expect(afterRecovery.error).toBeNull();
    expect(afterRecovery.isLoading).toBe(false);

    consoleSpy.mockRestore();
  });
});
