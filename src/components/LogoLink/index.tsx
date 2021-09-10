import React, { ReactNode } from 'react';

import { Heading } from '../Heading';
import { Container } from './styles';

type ILogoLinkProps = {
  text: string;
  srcImg?: string;
  link: string;
};

export function LogoLink({ text, srcImg = '', link }: ILogoLinkProps) {
  return (
    <Heading size="small" uppercase>
      <Container href={link}>
        {!!srcImg && <img src={srcImg} alt={text} />}
        {!srcImg && text}
      </Container>
    </Heading>
  );
}
