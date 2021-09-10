import styled, { css } from 'styled-components';

type IStyledProps = {
  background: boolean;
};

const containerBackgroundActivate = (theme) => css`
  background: ${theme.colors.primaryColor};
  color: ${theme.colors.white};
`;

export const Container = styled.div<IStyledProps>`
  ${({ theme, background }) => css`
    background: ${theme.colors.white};
    color: ${theme.colors.primaryColor};
    ${background && containerBackgroundActivate(theme)}
    min-height: 100vh;
    display: flex;
    align-items: center;
  `}
`;
