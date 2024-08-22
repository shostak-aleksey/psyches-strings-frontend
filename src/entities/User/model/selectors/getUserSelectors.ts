import { StateSchema } from '@/app/providers/StoreProvider';

export const getUserAuthData = (state: StateSchema) => state.user.authData;
export const getUserRole = (state: StateSchema) => state.user.authData?.role;
