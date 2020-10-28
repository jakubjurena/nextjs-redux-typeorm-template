import { NextPage } from 'next';

import { setStaticGeneration } from '../feature/render/renderSlice';
import { wrapper } from '../redux';
import { Navigation } from '../src/components/Navigation';
import { sleep } from '../utils/shared';

export type StaticProps = {};

const Static: NextPage<StaticProps> = () => (
  <div>
    <Navigation />
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
