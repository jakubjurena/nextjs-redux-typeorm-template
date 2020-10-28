import { createAsyncThunk, createSlice, Selector } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import { RootState } from '../../redux';
import { FetchingState } from '../../types';
import { User, UserState } from './types';

export const initialUserState: UserState = {
  fetchingState: FetchingState.initial,
};

export const name = 'user';

export const loadUser = createAsyncThunk<User>(`${name}/loadUser`, async (_, thunkAPI) => {
  try {
    // TODO: isServer
    if (false) {
      // TODO: Zjistit, kde je error message.
      console.log('on server');
      throw new Error('Can not load user on server.');
    }
    // TODO: isNotLogged
    if (false) {
      // TODO: Zjistit, kde je error message.
      console.log('not logged in');
      throw new Error('Can not load user when not logged in.');
    }

    const response = await fetch('/api/user', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Barear ${'apiToken'}`, // TODO: getApiToken
      },
    });

    if (!response.ok) {
      const error = await response.json();
      // TODO: Zjistit, kde je error message.
      console.log('response error');
      return thunkAPI.rejectWithValue({ error: error.errors });
    }

    return response.json();
  } catch (error) {
    // TODO: Zjistit, kde je error message.
    console.log('other error');
    return thunkAPI.rejectWithValue({ error: error.message });
  }
});

const userSlice = createSlice({
  name,
  initialState: initialUserState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(HYDRATE, () => {
        // HYDRATE on user reducer is disabled for security reasons.
      })
      .addCase(loadUser.pending, (state) => {
        delete state.errorMessage;
        state.fetchingState = FetchingState.request;
      })
      .addCase(loadUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.fetchingState = FetchingState.success;
      })
      .addCase(loadUser.rejected, (state, action) => {
        // TODO: Zjistit, kde je error message.
        console.log('action', action);
        state.errorMessage = action.error.message;
        state.fetchingState = FetchingState.error;
      });
  },
});

export const getUserState: Selector<RootState, UserState> = (state) => state[name];
export const getUser: Selector<RootState, User | undefined> = (state) => getUserState(state).user;
export const getUserFetchingState: Selector<RootState, FetchingState> = (state) => getUserState(state).fetchingState;
export const getUserErrorMessage: Selector<RootState, string> = (state) => getUserState(state).errorMessage;

// export const { loadUserRequest, loadUserSuccess, loadUserError } = userSlice.actions;
export default userSlice.reducer;
