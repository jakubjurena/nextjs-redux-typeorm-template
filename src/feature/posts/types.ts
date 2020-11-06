import { Post } from '../../../contrats/post';
import { FetchingState } from '../../types';

export type PostsState = {
  fetchingState: FetchingState;
  posts: ReadonlyArray<Post>;
  errorMessage?: string;
};
