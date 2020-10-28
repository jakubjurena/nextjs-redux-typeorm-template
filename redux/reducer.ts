import { combineReducers } from '@reduxjs/toolkit';

import userReducer, { name as userReducerName } from '../feature/user/userSlice';
import postsReducer, { name as postsReducerName } from '../feature/posts/postsSlice';
import renderReducer, { name as renderReducerName } from '../feature/render/renderSlice';

const rootReducer = combineReducers({
  [userReducerName]: userReducer,
  [postsReducerName]: postsReducer,
  [renderReducerName]: renderReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
