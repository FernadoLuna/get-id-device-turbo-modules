import FintechSecurityService from '../src/core/security/FintechSecurityService';
import NativeFintechSecurity from '../src/specs/NativeFintechSecurity';

jest.mock('../src/specs/NativeFintechSecurity', () => ({
  __esModule: true,
  default: {
    getIdentifier: jest.fn(),
  },
}));

describe('FintechSecurityService', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('retorna el identificador desde el modulo nativo', async () => {
    (NativeFintechSecurity.getIdentifier as jest.Mock).mockResolvedValue('device-123');

    await expect(FintechSecurityService.getIdentifier()).resolves.toBe('device-123');
    expect(NativeFintechSecurity.getIdentifier).toHaveBeenCalledTimes(1);
  });

  it('retorna UNKNOWN_IDENTIFIER cuando el modulo nativo resuelve undefined', async () => {
    (NativeFintechSecurity.getIdentifier as jest.Mock).mockResolvedValue(undefined);

    await expect(FintechSecurityService.getIdentifier()).resolves.toBe('UNKNOWN_IDENTIFIER');
    expect(NativeFintechSecurity.getIdentifier).toHaveBeenCalledTimes(1);
  });

  it('retorna UNKNOWN_IDENTIFIER y registra un error cuando el modulo nativo falla', async () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => undefined);
    const nativeError = new Error('native-failure');
    (NativeFintechSecurity.getIdentifier as jest.Mock).mockRejectedValue(nativeError);

    await expect(FintechSecurityService.getIdentifier()).resolves.toBe('UNKNOWN_IDENTIFIER');
    expect(consoleSpy).toHaveBeenCalledWith(
      '[FintechSecurityService] Error al obtener Identifier:',
      nativeError,
    );

    consoleSpy.mockRestore();
  });
});
