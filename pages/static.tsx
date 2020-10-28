import { NextPage } from 'next';
import Link from 'next/link';

import { setStaticGeneration } from '../feature/render/renderSlice';
import { wrapper } from '../redux';
import { sleep } from '../utils';

export type StaticProps = {};

const Static: NextPage<StaticProps> = () => (
  <div>
    <Link href="/">
      <a>Home</a>
    </Link>
    <div>Static generation</div>
  </div>
);

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  // staticke nacteni dat
  console.log('getStaticProps fetch');
  await sleep(2000);
  await console.log('getStaticProps loaded');

  store.dispatch(setStaticGeneration());
});

export default Static;
