import { Connection, createConnection } from 'typeorm';
import 'reflect-metadata'; // I did not find better place to import.

import { Post } from './entities/Post';

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
    entities: [Post],
    synchronize: process.env.NODE_ENV === 'production' ? false : true,
    logging: true,
  });

  console.info('created new connection');

  globalConnection = connection;
};
