import React from 'react';
import { PropsWithChildren } from 'react';
import '../styles/globals.css';

const Provider: React.FC<PropsWithChildren> = (props) => {
  return <>{props.children}</>;
};

export default Provider;
