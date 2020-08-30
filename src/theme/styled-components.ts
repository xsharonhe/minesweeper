import 'styled-components';

interface ThemeInterface {
    colors: {
        white: string,
        lightGrey: string,
        shadowGrey: string,
        darkGrey: string
    }
};

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeInterface {}
};