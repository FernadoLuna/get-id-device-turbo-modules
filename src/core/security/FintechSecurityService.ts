import NativeFintechSecurity from '../../specs/NativeFintechSecurity';

export const FintechSecurityService = {
  async getIdentifier(): Promise<string> {
    try {
      return (await NativeFintechSecurity?.getIdentifier()) ?? 'UNKNOWN_IDENTIFIER';
    } catch (error) {
      console.error('[FintechSecurityService] Error al obtener Identifier:', error);
      return 'UNKNOWN_IDENTIFIER';
    }
  },
};

export default FintechSecurityService;