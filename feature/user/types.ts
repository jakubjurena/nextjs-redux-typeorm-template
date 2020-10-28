import { FetchingState } from '../../types';

export type AuthToken = {
  accessToken: string;
  refreshToken: string;
};

export type User = {
  id: string;
  name: string;
  authToken: string;
  apiToken: AuthToken;
};

export type UserState = {
  fetchingState: FetchingState;
  user?: User;
  errorMessage?: string;
};
