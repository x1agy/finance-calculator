export type LoggedType =
  | { logged: false }
  | { logged: true; whoLogged: string };
