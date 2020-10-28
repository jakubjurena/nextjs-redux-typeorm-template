import React, { FunctionComponent } from 'react';
import Link from 'next/link';

export const Navigation: FunctionComponent = ({}) => (
  <div>
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/client">
      <a>Client</a>
    </Link>
    <Link href="/serverside">
      <a>ServerSide</a>
    </Link>
    <Link href="/static">
      <a>Static</a>
    </Link>
    <Link href="/regeneration">
      <a>Statis regeneration (60 s)</a>
    </Link>
  </div>
);
