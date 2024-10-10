// src/app/providers/StoreProvider/config/store.ts
import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { CombinedState, Reducer } from 'redux';

import { userReducer } from '@/entities/User';
import { $api } from '@/shared/api/api';

import { rtkApi } from '@/shared/api/rtkApi';
import { StateSchema, ThunkExtraArg } from './StateSchema';
import { createReducerManager } from './reducerManager';
import { loginApi } from '@/features/AuthByEmail/api/loginApi';
import { curseApi } from '@/pages/MainPage/model/api';

export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    user: userReducer,
    // [loginApi.reducerPath]: loginApi.reducer,
    // [rtkApi.reducerPath]: rtkApi.reducer,
    [curseApi.reducerPath]: curseApi.reducer,
  };

  const reducerManager = createReducerManager(rootReducers);

  const extraArg: ThunkExtraArg = {
    api: $api,
  };

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: extraArg,
        },
      }).concat(curseApi.middleware), // Добавляем все middleware
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
