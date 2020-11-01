// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next';
import { Post } from '../../../contrats/post';

export default (_: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200;
  const posts: Post[] = [
    {
      id: 'aaa',
      title: 'Post 1',
      description: 'Why I tried to build this app.',
      content: 'This is mocked long content',
    },
    {
      id: 'bbb',
      title: 'Post 2',
      description: 'What this app can do.',
      content: 'This is mocked long content',
    },
    {
      id: 'ccc',
      title: 'Post 3',
      description: 'About creator.',
      content: 'This is mocked long content',
    },
  ];
  res.json(posts);
};
