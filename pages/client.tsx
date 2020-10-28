import { NextPage } from 'next';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Link from 'next/link';

import { loadPosts } from '../feature/posts/postsSlice';
import { setClient } from '../feature/render/renderSlice';

export type ClientProps = {};

const Client: NextPage<ClientProps> = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setClient());
    dispatch(loadPosts());
  }, []);

  return (
    <div>
      <Link href="/">
        <a>home</a>
      </Link>
      <div>Client</div>
      <div>
        <h3>Posts</h3>
      </div>
    </div>
  );
};

export default Client;
