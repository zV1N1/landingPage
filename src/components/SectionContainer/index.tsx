import React, { ReactNode } from 'react';

import { Container } from './styled';

type ISectionContainerProps = {
  children?: ReactNode | JSX.Element | JSX.Element[];
};

export function SectionContainer({ children }: ISectionContainerProps) {
  return <Container>{children}</Container>;
}
