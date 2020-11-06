import { Connection, createConnection } from 'typeorm';
import 'reflect-metadata';

import { Post } from './entities/Post';
import { User } from './entities/User';
import { initDb } from './devData/initDb';

let globalConnection: Connection | undefined;

export const tryCreateConnection = async () => {
  if (globalConnection) {
    console.info('DB already connected');
    return;
  }

  const connection = await createConnection({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    entities: [Post, User],
    synchronize: process.env.NODE_ENV === 'production' ? false : true,
    logging: process.env.NODE_ENV === 'development',
  });

  if (process.env.NODE_ENV === 'development') {
    await initDb();
  }

  console.info('created new connection');

  globalConnection = connection;
};

// process.cwd()
