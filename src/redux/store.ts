import { configureStore } from '@reduxjs/toolkit';
import { createWrapper, MakeStore } from 'next-redux-wrapper';

import rootReducer, { RootState } from './reducer';

const makeStore: MakeStore<RootState> = () => {
  const store = configureStore({
    reducer: rootReducer,
  });

  return store;
};

export type AppDispatch = ReturnType<typeof makeStore>['dispatch'];

export type AsyncThunkOptions = {
  dispatch: AppDispatch;
  state: RootState;
};

export const wrapper = createWrapper(makeStore, { debug: false });
