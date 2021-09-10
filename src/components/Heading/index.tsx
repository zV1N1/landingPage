import React, { ReactNode } from 'react';

import { Title } from './styles';

export enum Esize {
  small = 'small',
  medium = 'medium',
  big = 'big',
  huge = 'huge',
}

export enum Eas {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6',
}

type IHeadingProps = {
  colorDark?: boolean;
  size?: keyof typeof Esize;
  as?: keyof typeof Eas;
  children?: ReactNode | JSX.Element | JSX.Element[];
  uppercase?: boolean;
};
export const Heading = ({
  children,
  colorDark = true,
  as = 'h1',
  size = 'huge',
  uppercase = false,
}: IHeadingProps) => {
  return (
    <Title colorDark={colorDark} as={as} size={size} uppercase={uppercase}>
      {children}
    </Title>
  );
};
