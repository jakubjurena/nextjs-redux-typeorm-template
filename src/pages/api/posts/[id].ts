// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next';
import { getRepository } from 'typeorm';
import { tryCreateConnection } from '../../../db';
import { Post } from '../../../db/entities/Post';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { id },
  } = req;
  await tryCreateConnection();

  switch (req.method) {
    case 'GET': {
      try {
        const postRepository = getRepository(Post);
        const post = await postRepository.find({ id: parseInt(id as string) });
        res.status(200);
        res.json(post);
      } catch (error) {
        res.status(500);
        res.json({
          message: 'something went wrong',
        });
      }
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
