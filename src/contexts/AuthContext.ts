import { createContext, type Dispatch, type SetStateAction } from 'react';
import type { LoggedType } from '../types/authTypes';

export const AuthContext = createContext<{
  auth: LoggedType;
  setAuth: Dispatch<SetStateAction<LoggedType>>;
} | null>(null);
