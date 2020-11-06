import { User } from '../../../contrats/user';
import { FetchingState } from '../../types';

export type UserState = {
  fetchingState: FetchingState;
  user?: User;
  errorMessage?: string;
};
