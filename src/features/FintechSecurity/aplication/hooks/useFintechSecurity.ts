import { useCallback, useEffect, useState } from 'react';
import { FintechSecurityService } from '../../../../core/security';

export function useFintechSecurity() {
  const [identifier, setIdentifier] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const refresh = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const value = await FintechSecurityService.getIdentifier();
      setIdentifier(value);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Unknown error';
      setError(message);
      console.error('[useFintechSecurity] Error al cargar datos:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  return {
    identifier,
    isLoading,
    error,
    refresh,
  };
}

export default useFintechSecurity;
