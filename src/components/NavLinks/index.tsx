import React, { ReactNode } from 'react';
import { MenuLink } from '../MenuLink';

import { Container } from './styles';

interface Items {
  children: string;
  link: string;
  newTab?: boolean;
}

type INavLinksProps = {
  links?: Array<Items>;
};

export function NavLinks({ links = [] }: INavLinksProps) {
  return (
    <Container>
      {links.map((link) => (
        <MenuLink key={link.link} {...link} />
      ))}
    </Container>
  );
}
