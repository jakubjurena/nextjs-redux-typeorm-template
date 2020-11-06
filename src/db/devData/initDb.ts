import { getRepository } from 'typeorm';

import { Post as PostContract } from '../../contrats/post';
import { User as UserContract } from '../../contrats/user';
import { Post } from '../entities/Post';
import { User } from '../entities/User';

type MockUser = Omit<UserContract, 'id'>;
const mockUsers: MockUser[] = [
  {
    name: 'John',
  },
  {
    name: 'Jane',
  },
  {
    name: 'Mike',
  },
];

type MockPost = Omit<PostContract, 'id' | 'authorId'>;
const mockPosts: MockPost[] = [
  {
    isPublished: true,
    title: 'First post',
    description: 'Why I created this blog',
    content: 'content',
  },
  {
    isPublished: true,
    title: 'Second post',
    description: 'Why I created this blog',
    content: 'content',
  },
  {
    isPublished: true,
    title: 'About me',
    description: 'React developer',
    content: 'content',
  },
  {
    isPublished: true,
    title: 'Nextjs blog',
    description: 'Why Nextjs',
    content: 'content',
  },
  {
    isPublished: true,
    title: 'TypeORM',
    description: 'Why TypeORM',
    content: 'content',
  },
];

export const initDb = async () => {
  const userRepository = await getRepository(User);
  const postRepository = await getRepository(Post);

  const users = await userRepository.find();

  if (users.length === 0) {
    const saveUserPromisses = mockUsers.map(async (mockUser) => {
      const newUser = new User();
      Object.keys(mockUser).forEach((key) => (newUser[key] = mockUser[key]));
      return userRepository.save(newUser);
    });
    await Promise.all(saveUserPromisses);
    const usersAfterAllSaved = await userRepository.find();
    if (usersAfterAllSaved.length !== mockUsers.length) {
      throw new Error('Error while saving users.');
    }
  }

  const posts = await postRepository.find();

  if (posts.length === 0) {
    const savePostPromises = mockPosts.map(async (mockPost, index) => {
      const newPost = new Post();
      Object.keys(mockPost).forEach((key) => (newPost[key] = mockPost[key]));
      newPost.author = users[index % users.length];
      return postRepository.save(newPost);
    });
    await Promise.all(savePostPromises);
    const postsAfterAllSaved = await postRepository.find();
    if (postsAfterAllSaved.length !== mockPosts.length) {
      throw new Error('Error while saving posts.');
    }
  }
};
