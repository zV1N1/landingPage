import React, { ReactNode } from 'react';

import { Container } from './styled';

type IMenuLinkProps = {
  children?: ReactNode | JSX.Element | JSX.Element[];
  link?: string;
  newTab?: boolean;
};

export function MenuLink({ children, link, newTab = false }: IMenuLinkProps) {
  const target = newTab ? '_black' : '_self';
  return (
    <Container href={link} target={target}>
      {children}
    </Container>
  );
}
