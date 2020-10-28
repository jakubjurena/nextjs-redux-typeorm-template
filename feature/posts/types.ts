import { FetchingState } from '../../types';

export type Post = {
  id: string;
  title: string;
  description: string;
  content: string;
};

export type PostsState = {
  fetchingState: FetchingState;
  posts: ReadonlyArray<Post>;
  errorMessage?: string;
};
