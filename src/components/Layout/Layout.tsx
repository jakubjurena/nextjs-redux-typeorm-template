import React, { FunctionComponent, ReactNode } from 'react';
import Head from 'next/head';

import styles from './Layout.module.scss';
import { Navigation } from '../Navigation';

type LayoutProps = {
  children: ReactNode;
};

export const Layout: FunctionComponent<LayoutProps> = ({ children }) => (
  <div className={styles.container}>
    <Head>
      <title>Example app</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div>
      <Navigation />
    </div>

    <main className={styles.main}>{children}</main>

    <footer className={styles.footer}>footer</footer>
  </div>
);
