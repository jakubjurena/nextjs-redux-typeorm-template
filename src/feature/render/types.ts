export enum FetchDestination {
  initial = 'initial',
  staticGeneration = 'staticGeneration',
  serverSide = 'serverSide',
  client = 'client',
}

export type RenderState = {
  destination: FetchDestination;
};
