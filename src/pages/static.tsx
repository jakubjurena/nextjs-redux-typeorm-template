import { NextPage } from 'next';

import { setStaticGeneration } from '../feature/render/renderSlice';
import { wrapper } from '../redux';
import { sleep } from '../utils/shared';

export type StaticProps = {};

const Static: NextPage<StaticProps> = () => (
  <>
    <h1>Static</h1>
    <p>Automatically generated as static HTML + JSON (uses getStaticProps)</p>
  </>
);

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  // staticke nacteni dat
  console.log('getStaticProps fetch');
  await sleep(2000);
  await console.log('getStaticProps loaded');

  store.dispatch(setStaticGeneration());
});

export default Static;
