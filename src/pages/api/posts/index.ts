// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next';
import { getRepository } from 'typeorm';
import { tryCreateConnection } from '../../../db';
import { Post } from '../../../db/entities/Post';
import { User } from '../../../db/entities/User';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await tryCreateConnection();

  switch (req.method) {
    case 'GET': {
      try {
        const postRepository = getRepository(Post);
        const posts = await postRepository.find();
        res.status(200);
        res.json(posts);
      } catch (error) {
        res.status(500);
        res.json({
          message: 'something went wrong',
        });
      }
      return;
    }
    case 'POST': {
      try {
        const postRepository = getRepository(Post);
        const userRepository = getRepository(User);

        const author = await userRepository.findOne({ id: req.body.authorId });

        const newPost = new Post();
        newPost.title = req.body.title;
        newPost.description = req.body.description;
        newPost.content = req.body.content;
        newPost.author = author;

        const savedPost = await postRepository.save(newPost);

        res.status(200);
        res.json(savedPost);
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
