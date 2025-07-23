import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore, selectIsAuthenticated, selectIsLoading } from '@/stores/authStore';

export const useAuth = (redirectTo: string = '/admin-login') => {
  const router = useRouter();
  const isAuthenticated = useAuthStore(selectIsAuthenticated);
  const isLoading = useAuthStore(selectIsLoading);
  const { verifyAuth } = useAuthStore();

  useEffect(() => {
    const checkAuth = async () => {
      if (!isAuthenticated) {
        const success = await verifyAuth();
        if (!success) {
          router.push(redirectTo);
        }
      }
    };

    checkAuth();
  }, [isAuthenticated, verifyAuth, router, redirectTo]);

  return {
    isAuthenticated,
    isLoading,
  };
};

export const useRequireAuth = (redirectTo: string = '/admin-login') => {
  const { isAuthenticated, isLoading } = useAuth(redirectTo);
  
  return {
    isAuthenticated,
    isLoading,
    shouldRender: isAuthenticated && !isLoading,
  };
};
