import React from 'react';
import { screen } from '@testing-library/dom';
import { renderTheme } from '../../styles/render-theme';
import { Menu } from '.';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

it('should render text logo', () => {
  renderTheme(<Menu />);
  const heading = screen.getByRole('heading', { name: 'Olá mundo' });
  expect(heading.firstChild).toHaveAttribute('href', '#target');
});
