export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  password?: string;
  avatar?: string;
}

export enum UserRole {
  ADMIN = 'ADMIN',
  USER = 'USER',
  MANAGER = 'MANAGER',
  GUEST = 'GUEST',
}

export interface UserSchema {
  authData?: User;

  _inited: boolean;
}
