import React from 'react';
import { screen } from '@testing-library/dom';
import { renderTheme } from '../../styles/render-theme';
import { Text } from '.';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

describe('<Text />', () => {
  it('should render a text', () => {
    renderTheme(<Text>Children</Text>);
    expect(screen.getByText('Children')).toBeInTheDocument();
  });
});
