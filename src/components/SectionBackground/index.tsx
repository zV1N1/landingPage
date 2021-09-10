import React, { ReactNode } from 'react';

import { SectionContainer } from '../SectionContainer';

import { Container } from './styled';

type ISectionBackgroundProps = {
  children?: ReactNode | JSX.Element | JSX.Element[];
  background?: boolean;
};

export function SectionBackground({
  children,
  background = false,
}: ISectionBackgroundProps) {
  return (
    <Container background={background}>
      <SectionContainer>{children}</SectionContainer>
    </Container>
  );
}
