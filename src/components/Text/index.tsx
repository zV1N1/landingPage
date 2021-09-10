import React, { ReactNode } from 'react';

import { Container } from './styled';

type ITextProps = {
  children?: ReactNode | JSX.Element | JSX.Element[];
};

export function Text({ children }: ITextProps) {
  return <Container>{children}</Container>;
}
