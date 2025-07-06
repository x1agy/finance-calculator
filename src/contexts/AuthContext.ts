import { createContext } from 'react';
import type { LoggedType } from '../types/authTypes';

export const AuthContext = createContext<{
  auth: LoggedType;
  setAuth: (value: LoggedType) => void;
} | null>(null);
