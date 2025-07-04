import { useState, type ReactNode } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import type { LoggedType } from '../types/authTypes';

export const AppLayout = ({ children }: { children?: ReactNode }) => {
  const [auth, setAuth] = useState<LoggedType>({ logged: false });

  return <AuthContext value={{ auth, setAuth }}>{children}</AuthContext>;
};
