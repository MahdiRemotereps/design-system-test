import React from 'react';
import { PropsWithChildren } from 'react';

const Provider: React.FC<PropsWithChildren> = (props) => {
  return <>{props.children}</>;
};

export default Provider;
