import { createAsyncThunk, createSlice, PayloadAction, Selector } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import { Post } from '../../contrats/post';
import { AsyncThunkOptions, RootState } from '../../redux';
import { FetchingState } from '../../types';
import { PostsState } from './types';

export const initialPostsState: PostsState = {
  fetchingState: FetchingState.initial,
  posts: [],
};

export const name = 'posts';

export const loadPosts = createAsyncThunk<Post[], void, AsyncThunkOptions>(
  `${name}/loadPosts`,
  async (_, thunkAPI) => {
    try {
      const response = await fetch('/api/posts', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        const error = await response.json();
        // TODO: Zjistit, kde je error message.
        console.log('response error');
        return thunkAPI.rejectWithValue({ error: error.errors });
      }

      console.log('New posts fetched');
      return response.json();
    } catch (error) {
      // TODO: Zjistit, kde je error message.
      console.log('other error');
      thunkAPI.rejectWithValue({ error: error.message });
    }
  },
  {
    condition: (_, { getState }) => {
      const rootState = getState();
      if (getPostsFetchingState(rootState) !== FetchingState.initial) {
        if (getPostsFetchingState(rootState) === FetchingState.request) {
          console.log('Posts already requested');
        } else if (getPostsFetchingState(rootState) === FetchingState.success) {
          console.log('Posts already fetched');
        }
        return false;
      }
    },
  },
);

const postsSlice = createSlice({
  name,
  initialState: initialPostsState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(HYDRATE, (state, action) => {
        const { payload: serverState } = action as PayloadAction<RootState>;
        const serverPostsState = getPostsState(serverState);
        if (state.fetchingState === FetchingState.initial) {
          state = { ...serverPostsState, posts: [...serverPostsState.posts] };
        }
      })
      .addCase(loadPosts.pending, (state) => {
        delete state.errorMessage;
        state.fetchingState = FetchingState.request;
      })
      .addCase(loadPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.fetchingState = FetchingState.success;
      })
      .addCase(loadPosts.rejected, (state, action) => {
        // TODO: Zjistit, kde je error message.
        console.log('action', action);
        state.errorMessage = action.error.message;
        state.fetchingState = FetchingState.error;
      });
  },
});

export const getPostsState: Selector<RootState, PostsState> = (state) => state[name];
export const getPosts: Selector<RootState, ReadonlyArray<Post> | undefined> = (state) => getPostsState(state).posts;
export const getPostsFetchingState: Selector<RootState, FetchingState> = (state) => getPostsState(state).fetchingState;
export const getPostsErrorMessage: Selector<RootState, string> = (state) => getPostsState(state).errorMessage;

export default postsSlice.reducer;
