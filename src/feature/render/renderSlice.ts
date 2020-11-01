import { createSlice, PayloadAction, Selector } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import { RootState } from '../../redux';
import { FetchDestination, RenderState } from './types';

export const initialPostsState: RenderState = {
  destination: FetchDestination.initial,
};

export const name = 'render';

const renderSlice = createSlice({
  name,
  initialState: initialPostsState,
  reducers: {
    setStaticGeneration: (state) => {
      state.destination = FetchDestination.staticGeneration;
    },
    setServerSide: (state) => {
      state.destination = FetchDestination.serverSide;
    },
    setClient: (state) => {
      state.destination = FetchDestination.client;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action) => {
      const { payload: serverState } = action as PayloadAction<RootState>;
      const serverRenderState = getRenderState(serverState);
      state.destination = serverRenderState.destination;
    });
  },
});

export const { setStaticGeneration, setServerSide, setClient } = renderSlice.actions;

export const getRenderState: Selector<RootState, RenderState> = (state) => state[name];
export const getDestination: Selector<RootState, FetchDestination> = (state) => getRenderState(state).destination;

export default renderSlice.reducer;
