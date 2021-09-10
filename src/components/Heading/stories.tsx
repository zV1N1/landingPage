import React from 'react';
import { Heading } from '.';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'Não sei',
  },
  argsTypes: {
    children: { type: 'string' },
  },
};

export const Template = ({ args }: any) => <Heading {...args} />;
