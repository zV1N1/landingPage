import React from 'react';
import { screen } from '@testing-library/dom';
import { renderTheme } from '../../styles/render-theme';
import { NavLinks } from '.';
import mock from './mock';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

describe('<NavLinks />', () => {
  it('should render links', () => {
    renderTheme(<NavLinks links={mock} />);
    expect(screen.getAllByRole('link')).toHaveLength(mock.length);
  });

  it('should not render link', () => {
    renderTheme(<NavLinks links={mock} />);
    expect(screen.queryAllByText(/links/i)).toHaveLength(0);
  });
});
