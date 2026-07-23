import FintechSecurityService from '../src/core/security/FintechSecurityService';
import NativeFintechSecurity from '../src/specs/NativeFintechSecurity';

jest.mock('../src/specs/NativeFintechSecurity', () => ({
  __esModule: true,
  default: {
    getDeviceId: jest.fn(),
    isJailbroken: jest.fn(),
    getIdentifier: jest.fn(),
  },
}));

describe('FintechSecurityService', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('returns the identifier from the native module', () => {
    (NativeFintechSecurity.getIdentifier as jest.Mock).mockReturnValue('device-123');

    expect(FintechSecurityService.getIdentifier()).toBe('device-123');
    expect(NativeFintechSecurity.getIdentifier).toHaveBeenCalledTimes(1);
  });
});
