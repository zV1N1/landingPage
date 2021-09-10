import React from 'react';
import { screen } from '@testing-library/dom';
import { renderTheme } from '../../styles/render-theme';
import { LogoLink } from '.';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

describe('<LogoLink />', () => {
  it('should render text logo', () => {
    renderTheme(<LogoLink link="#target" text="Olá mundo" />);
    const heading = screen.getByRole('heading', { name: 'Olá mundo' });
    expect(heading.firstChild).toHaveAttribute('href', '#target');
  });

  it('should render image logo', () => {
    renderTheme(
      <LogoLink link="#target" text="Olá mundo" srcImg="image.jpg" />,
    );
    const heading = screen.getByRole('heading', { name: 'Olá mundo' });
    expect(heading.firstChild.firstChild).toHaveAttribute('src', 'image.jpg');
  });
});
