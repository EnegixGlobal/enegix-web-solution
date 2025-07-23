import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface AdminUser {
  id: string;
  name: string;
  email: string;
}

interface AuthState {
  // State
  isAuthenticated: boolean;
  isLoading: boolean;
  user: AdminUser | null;
  error: string | null;

  // Actions
  setAuthenticated: (isAuth: boolean) => void;
  setLoading: (loading: boolean) => void;
  setUser: (user: AdminUser | null) => void;
  setError: (error: string | null) => void;
  
  // Auth methods
  login: (credentials: { email: string; password: string }) => Promise<boolean>;
  logout: () => Promise<void>;
  verifyAuth: () => Promise<boolean>;
  clearAuth: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      // Initial state
      isAuthenticated: false,
      isLoading: false,
      user: null,
      error: null,

      // Basic setters
      setAuthenticated: (isAuth: boolean) => set({ isAuthenticated: isAuth }),
      setLoading: (loading: boolean) => set({ isLoading: loading }),
      setUser: (user: AdminUser | null) => set({ user }),
      setError: (error: string | null) => set({ error }),

      // Login method
      login: async (credentials: { email: string; password: string }) => {
        set({ isLoading: true, error: null });
        
        try {
          const response = await fetch('/api/admin/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
            credentials: 'include',
          });

          const data = await response.json();

          if (response.ok && data.success) {
            // After successful login, verify to get user data
            const verifySuccess = await get().verifyAuth();
            return verifySuccess;
          } else {
            set({
              error: data.message || 'Login failed',
              isLoading: false,
            });
            return false;
          }
        } catch (error) {
          console.error('Login error:', error);
          set({
            error: 'Network error during login',
            isLoading: false,
          });
          return false;
        }
      },

      // Logout method
      logout: async () => {
        set({ isLoading: true });
        
        try {
          await fetch('/api/admin/logout', {
            method: 'POST',
            credentials: 'include',
          });
        } catch (error) {
          console.error('Logout error:', error);
        } finally {
          // Clear state regardless of API call success
          set({
            isAuthenticated: false,
            user: null,
            error: null,
            isLoading: false,
          });
        }
      },

      // Verify authentication
      verifyAuth: async () => {
        set({ isLoading: true, error: null });
        
        try {
          const response = await fetch('/api/admin/verify', {
            method: 'GET',
            credentials: 'include',
          });
          
          const data = await response.json();

          if (response.ok && data.success) {
            const userData: AdminUser = {
              id: data.admin.id,
              name: data.admin.name,
              email: data.admin.email,
            };

            set({
              isAuthenticated: true,
              user: userData,
              error: null,
              isLoading: false,
            });

            return true;
          } else {
            set({
              isAuthenticated: false,
              user: null,
              error: data.message || 'Authentication failed',
              isLoading: false,
            });
            return false;
          }
        } catch (error) {
          console.error('Auth verification error:', error);
          set({
            isAuthenticated: false,
            user: null,
            error: 'Network error during authentication',
            isLoading: false,
          });
          return false;
        }
      },

      // Clear all auth data
      clearAuth: () => {
        set({
          isAuthenticated: false,
          user: null,
          error: null,
          isLoading: false,
        });
      },
    }),
    {
      name: 'auth-storage', // localStorage key
      storage: createJSONStorage(() => localStorage),
      // Only persist user data and authentication status
      partialize: (state) => ({
        isAuthenticated: state.isAuthenticated,
        user: state.user,
      }),
    }
  )
);

// Selectors for easier access to specific state parts
export const selectIsAuthenticated = (state: AuthState) => state.isAuthenticated;
export const selectUser = (state: AuthState) => state.user;
export const selectIsLoading = (state: AuthState) => state.isLoading;
export const selectError = (state: AuthState) => state.error;
