import { NextPage } from 'next';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Post } from '../contrats/post';

import { getPosts, getPostsFetchingState, loadPosts } from '../feature/posts/postsSlice';
import { setClient } from '../feature/render/renderSlice';
import { FetchingState } from '../types';

export type ClientProps = {};

const renderPosts = (postsFetchingState: FetchingState, posts: ReadonlyArray<Post>) => {
  switch (postsFetchingState) {
    case FetchingState.error:
      return <div>Error</div>;
    case FetchingState.request:
      return <div>Loading ...</div>;
    case FetchingState.success:
      return (
        <ul>
          {posts.map((post) => (
            <li>{post.title}</li>
          ))}
        </ul>
      );
    case FetchingState.initial:
      return <div>initial</div>;
  }
};
const Client: NextPage<ClientProps> = () => {
  const dispatch = useDispatch();
  const postsFetchingState = useSelector(getPostsFetchingState);
  const posts = useSelector(getPosts);

  useEffect(() => {
    dispatch(setClient());
    dispatch(loadPosts());
  }, []);

  return (
    <>
      <h1>Client</h1>
      <p>Automatically rendered as static HTML (uses no initial props)</p>
      <p>This page fetch posts on initial render</p>
      <h2>Posts</h2>
      {renderPosts(postsFetchingState, posts)}
    </>
  );
};

export default Client;
