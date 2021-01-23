import React, { FunctionComponent } from 'react';
import Link from 'next/link';
import { INCREMENTAL_STATIC_REGENERATION_SECONDS } from '../../constants';

export const Navigation: FunctionComponent = ({}) => (
  <nav>
    <Link href="/">
      <a>Home</a>
    </Link>
    {' ● '}
    <Link href="/client">
      <a>Client</a>
    </Link>
    {' ● '}
    <Link href="/serverside">
      <a>ServerSide</a>
    </Link>
    {' ● '}
    <Link href="/static">
      <a>Static</a>
    </Link>
    {' ● '}
    <Link href="/regeneration">
      <a>Static regeneration ({INCREMENTAL_STATIC_REGENERATION_SECONDS} s)</a>
    </Link>
  </nav>
);
