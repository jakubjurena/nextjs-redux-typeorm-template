// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next';
import { getRepository } from 'typeorm';
import { tryCreateConnection } from '../../../../db';
import { Post } from '../../../../db/entities/Post';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await tryCreateConnection();
  const postRepository = getRepository(Post);

  console.log(req.method);
  console.log('Post count:', await postRepository.count());
  switch (req.method) {
    case 'GET': {
      res.status(200);
      res.json({
        message: 'Not implemented yet.',
      });
      return;
    }
    case 'POST': {
      res.status(200);
      res.json({
        message: 'Not implemented yet.',
      });
      return;
    }
    default: {
      res.status(404);
      res.json({
        message: `API does not have implemented method "${req.method}".`,
      });
    }
  }
};
