import { createContext, useContext, useState, type ReactNode } from 'react';
import type { User } from '../components/ui/UserAvatar';

/* Usuário mock para visualização */
const MOCK_USER: User = {
  name: 'Arthur Henrique',
  email: 'arthur@herbapedia.com',
  avatarUrl: undefined, // troque por uma URL para testar com foto
};

interface AuthContextValue {
  user: User | null;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(MOCK_USER); // começa logado p/ visualizar

  return (
    <AuthContext.Provider value={{
      user,
      login:  () => setUser(MOCK_USER),
      logout: () => setUser(null),
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth deve ser usado dentro de <AuthProvider>');
  return ctx;
}
