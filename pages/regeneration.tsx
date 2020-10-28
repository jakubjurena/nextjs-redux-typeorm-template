import { GetStaticProps, NextPage } from 'next';

import { wrapper } from '../redux';
import { Navigation } from '../src/components/Navigation';
import { getRegeneration } from './api/regeneration';

export type StaticProps = {
  apiCalls: number;
};

const Regeneration: NextPage<StaticProps> = ({ apiCalls }) => (
  <div>
    <Navigation />
    <div>Static generation ({apiCalls})</div>
  </div>
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
      const json = await getRegeneration();
      console.log(json);

      return { props: json };
    }),
    10,
  );

export default Regeneration;
