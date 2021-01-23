import { GetStaticProps, NextPage } from 'next';

import { INCREMENTAL_STATIC_REGENERATION_SECONDS } from '../constants';
import { wrapper } from '../redux';
import { Time } from '../types';
import { getRegeneration } from './api/regeneration';

export type StaticProps = {
  apiCalls: number;
  time: Time;
};

const Regeneration: NextPage<StaticProps> = ({ apiCalls }) => (
  <>
    <h1>Regeneration</h1>
    <p>Sutomatically generated as static HTML + JSON (uses getStaticProps)</p>
    <p>Incremental static regeneration (uses revalidate in getStaticProps)</p>

    <h2>Server render count</h2>
    <p>{apiCalls}</p>
  </>
);

/**
 * This is WA from nextjs discussin @link https://github.com/vercel/next.js/discussions/11552;
 */
const addRevalidate = async (context, pageStaticProps, revalidateSeconds = 60) => {
  const getStaticProps = await pageStaticProps(context);
  getStaticProps.revalidate = revalidateSeconds;
  return getStaticProps;
};

export const getStaticProps: GetStaticProps = async (context) =>
  addRevalidate(
    context,
    wrapper.getStaticProps(async () => {
      const props = await getRegeneration();
      return { props };
    }),
    INCREMENTAL_STATIC_REGENERATION_SECONDS,
  );

export default Regeneration;
