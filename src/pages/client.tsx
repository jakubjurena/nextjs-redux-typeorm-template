import { NextPage } from 'next';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { loadPosts } from '../feature/posts/postsSlice';
import { setClient } from '../feature/render/renderSlice';
import { Navigation } from '../components/Navigation';

export type ClientProps = {};

const Client: NextPage<ClientProps> = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setClient());
    dispatch(loadPosts());
  }, []);

  return (
    <div>
      <Navigation />
      <div>Client</div>
      <div>
        <h3>Posts</h3>
      </div>
    </div>
  );
};

export default Client;
