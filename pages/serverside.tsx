import { NextPage } from 'next';
import Link from 'next/link';

import { setServerSide } from '../feature/render/renderSlice';
import { wrapper } from '../redux';
import { sleep } from '../utils';

export type ServerSideProps = {};

const ServerSide: NextPage<ServerSideProps> = () => (
  <div>
    <Link href="/">
      <a>Home</a>
    </Link>
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
