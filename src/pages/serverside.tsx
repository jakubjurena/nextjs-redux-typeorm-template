import { NextPage } from 'next';

import { setServerSide } from '../feature/render/renderSlice';
import { wrapper } from '../redux';
import { sleep } from '../utils/shared';

export type ServerSideProps = {};

const ServerSide: NextPage<ServerSideProps> = () => (
  <>
    <h1>Serverside</h1>
    <p>Server-side renders at runtime (uses getInitialProps or getServerSideProps)</p>
  </>
);

export const getServerSideProps = wrapper.getServerSideProps(async ({ store }) => {
  // staticke nacteni dat
  console.log('getServerSideProps fetch');
  await sleep(2000);
  await console.log('getServerSideProps loaded');

  store.dispatch(setServerSide());
});

export default ServerSide;
