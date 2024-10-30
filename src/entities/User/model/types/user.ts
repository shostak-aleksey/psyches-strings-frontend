export interface User {
  id: string;
  email: string;
  googleId: string;
  role: string;
  type: string[];
}

export enum UserRole {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

export interface UserSchema {
  authData?: User;

  _inited: boolean;
}
