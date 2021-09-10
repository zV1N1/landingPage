import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primaryColor: string;
      secondaryColor: string;
      white: string;
    };
    font: {
      family: {
        default: string;
        secondary: string;
      };
      sizes: {
        xsmall: string;
        small: string;
        medium: string;
        large: string;
        xlarge: string;
        xxlarge: string;
        huge: string;
        xhuge: string;
      };
    };
    media: {
      lteMedium: string;
    };
    spacing: {
      xsmall: string;
      small: string;
      medium: string;
      large: string;
      xlarge: string;
      xxlarge: string;
      huge: string;
      xhuge: string;
    };
  }
}
