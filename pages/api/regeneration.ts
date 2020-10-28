// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next';
import { Time } from '../../types';
import { sleep } from '../../utils';

let apiCalls = 0;

type GenerationReturnType = {
  apiCalls: number;
  time: Time;
};

export const getRegeneration = async (): Promise<GenerationReturnType> => {
  apiCalls++;
  const now = new Date();
  await sleep(2000);

  const result = {
    apiCalls,
    time: {
      hours: now.getUTCHours(),
      minutes: now.getUTCMinutes(),
      seconds: now.getUTCSeconds(),
    },
  };
  console.log(result);
  return result;
};

export default async (_: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200;
  const response = await getRegeneration();

  res.json(response);
};
