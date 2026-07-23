import NativeFintechSecurity from '../../specs/NativeFintechSecurity';

export const FintechSecurityService = {
  getIdentifier(): string {
    try {
      return NativeFintechSecurity?.getIdentifier() ?? 'UNKNOWN_IDENTIFIER';
    } catch (error) {
      console.error('[FintechSecurityService] Error al obtener Identifier:', error);
      return 'UNKNOWN_IDENTIFIER';
    }
  },
};

export default FintechSecurityService;