import React from 'react';
import { screen } from '@testing-library/dom';
import { renderTheme } from '../../styles/render-theme';
import { SectionContainer } from '.';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

describe('<SectionContainer />', () => {
  it('should render content', () => {
    renderTheme(
      <SectionContainer>
        <h1>Children</h1>
      </SectionContainer>,
    );
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
