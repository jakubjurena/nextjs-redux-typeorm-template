import { NextPage } from 'next';

import { setServerSide } from '../feature/render/renderSlice';
import { wrapper } from '../redux';
import { Navigation } from '../src/components/Navigation';
import { sleep } from '../utils/shared';

export type ServerSideProps = {};

const ServerSide: NextPage<ServerSideProps> = () => (
  <div>
    <Navigation />
    <div>Server-Side rendering</div>
  </div>
);

export const getServerSideProps = wrapper.getServerSideProps(async ({ store }) => {
  // staticke nacteni dat
  console.log('getServerSideProps fetch');
  await sleep(2000);
  await console.log('getServerSideProps loaded');

  store.dispatch(setServerSide());
});

export default ServerSide;
