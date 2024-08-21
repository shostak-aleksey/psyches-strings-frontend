export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  password?: string;
  avatar?: string;
}

export interface UserSchema {
  authData?: User;

  _inited: boolean;
}
