import { useAuthStore, selectUser, selectIsAuthenticated } from '@/stores/authStore';

export const UserProfile = () => {
  const user = useAuthStore(selectUser);
  const isAuthenticated = useAuthStore(selectIsAuthenticated);

  if (!isAuthenticated || !user) {
    return null;
  }

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
      <h3 className="text-lg font-semibold text-white mb-2">Welcome back!</h3>
      <div className="space-y-1 text-gray-300">
        <p><span className="font-medium">Name:</span> {user.name}</p>
        <p><span className="font-medium">Email:</span> {user.email}</p>
        <p><span className="font-medium">ID:</span> {user.id}</p>
      </div>
    </div>
  );
};
