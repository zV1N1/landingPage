import React, { Children, ReactNode, useState } from 'react';
import { LogoLink } from '../LogoLink';
import { NavLinks } from '../NavLinks';
import { SectionContainer } from '../SectionContainer';
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';

import { Button, Container, MenuContainer } from './styled';
interface Items {
  children: string;
  link: string;
  newTab?: boolean;
}

type IMenuProps = {
  links?: Array<Items>;
  logoData: {
    text: string;
    srcImg?: string;
    link: string;
  };
};

export function Menu({ links = [], logoData }: IMenuProps) {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button
        visible={visible}
        onClick={() => setVisible(true)}
        aria-label="Open/Close Menu"
      >
        {visible ? (
          <CloseIcon aria-label="Close Menu" />
        ) : (
          <MenuIcon aria-label="Open Menu" />
        )}
      </Button>
      <Container visible={visible} onClick={() => setVisible(true)}>
        <SectionContainer>
          <MenuContainer>
            <LogoLink {...logoData} />
            <NavLinks links={links} />
          </MenuContainer>
        </SectionContainer>
      </Container>
    </>
  );
}
