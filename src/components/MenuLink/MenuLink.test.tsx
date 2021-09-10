import React from 'react';
import { screen } from '@testing-library/dom';
import { renderTheme } from '../../styles/render-theme';
import { MenuLink } from '.';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

describe('<MenuLink />', () => {
  it('should render a link', () => {
    renderTheme(<MenuLink link="http://localhost">Children</MenuLink>);
    expect(screen.getByRole('link', { name: 'Children' })).toBeInTheDocument();
  });

  it('should render open in a new tab', () => {
    renderTheme(
      <MenuLink link="http://localhost" newTab={true}>
        Children
      </MenuLink>,
    );
    expect(screen.getByRole('link', { name: 'Children' })).toHaveAttribute(
      'target',
      '_black',
    );
  });
});
