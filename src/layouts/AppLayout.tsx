import { useEffect, useState, type ReactNode } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import type { LoggedType } from '../types/authTypes';

export const AppLayout = ({ children }: { children?: ReactNode }) => {
  const [auth, setAuth] = useState<LoggedType>({ logged: false });

  const handleAuth = (value: LoggedType) => {
    localStorage.setItem('session', JSON.stringify(value));
    setAuth(value);
  };

  useEffect(() => {
    const session = JSON.parse(
      localStorage.getItem('session') ?? ''
    ) as LoggedType;

    if (session.logged) {
      setAuth(session);
    }
  }, []);

  return (
    <AuthContext value={{ auth, setAuth: handleAuth }}>{children}</AuthContext>
  );
};
