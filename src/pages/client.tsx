import { NextPage } from 'next';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

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
    <>
      <h1>Client</h1>
      <p>Automatically rendered as static HTML (uses no initial props)</p>
      <p>This page fetch posts on initial render</p>
    </>
  );
};

export default Client;
