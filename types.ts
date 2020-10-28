export enum FetchingState {
  initial = 'initial',
  request = 'request',
  success = 'success',
  error = 'error',
}

export type Time = {
  hours: number;
  minutes: number;
  seconds: number;
};
