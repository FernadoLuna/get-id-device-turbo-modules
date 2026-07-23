import { useCallback, useEffect, useState } from 'react';
import { FintechSecurityService } from '../../../../core/security';

export function useFintechSecurity() {
  const [identifier, setIdentifier] = useState('');

  const refresh = useCallback(() => {
    try {
      setIdentifier(FintechSecurityService.getIdentifier());
    } catch (error) {
      console.error('[useFintechSecurity] Error al cargar datos:', error);
    }
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  return {
    identifier,
    refresh,
  };
}

export default useFintechSecurity;
