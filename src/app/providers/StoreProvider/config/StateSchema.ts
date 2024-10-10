import {
  AnyAction,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
} from '@reduxjs/toolkit';
import { CombinedState } from 'redux';
import { AxiosInstance } from 'axios';

import { UserSchema } from '@/entities/User';

import { rtkApi } from '@/shared/api/rtkApi';
import { LoginSchema } from '@/features/AuthByEmail';
import { loginApi } from '@/features/AuthByEmail/api/loginApi';
import { curseApi } from '@/pages/MainPage/model/api';

export interface StateSchema {
  user: UserSchema;
  // [loginApi.reducerPath]: ReturnType<typeof loginApi.reducer>;
  [curseApi.reducerPath]: ReturnType<typeof curseApi.reducer>;
  // Асинхронные редюсеры
  loginForm?: LoginSchema;
  loginApi?: LoginSchema;
}

export type StateSchemaKey = keyof StateSchema;
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
  // true - вмонтирован, false - демонтирован
  getMountedReducers: () => MountedReducers;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}
