export interface IUsedColors {
  black: string;
  white: string;
  blackOpacity: string;
  blueOpacity: string;
  blue: string;
  blueMoreOpacity: string;
  redOpacity: string;
  lightGrayOpacity: string;
  greenOpacity: string;
  lightGray: string;
  gray: string;
}

export interface ITheme {
  usedColors: IUsedColors;
  fontSizes: {
    sm: string;
    m: string;
    l: string;
    xl: string;
    xxl: string;
  };
  fontWeight: {
    light: number;
    normal: number;
    medium: number;
    semibold: number;
    bold: number;
  };
  valueInPx: {
    px0: string;
    px1: string;
    px2: string;
    px5: string;
    px8: string;
    px10: string;
    px16: string;
    px20: string;
    px22: string;
    px25: string;
    px30: string;
    px34: string;
    px40: string;
    px45: string;
    px50: string;
    px60: string;
    px70: string;
    px100: string;
    px125: string;
    px150: string;
    px200: string;
    px250: string;
    px300: string;
    px320: string;
    px370: string;
    px400: string;
    px480: string;
  };
  valueInPercent: {
    pr10: string;
    pr25: string;
    pr50: string;
    pr70: string;
    pr100: string;
    pr150: string;
  };
  valueInVh: {
    vh7: string;
    vh18: string;
    vh30: string;
    vh40: string;
    vh50: string;
    vh60: string;
    vh75: string;
    vh90: string;
    vh100: string;
  };
  valueInVw: {
    vw25: string;
    vw35: string;
    vw50: string;
    vw60: string;
    vw80: string;
    vw90: string;
    vw100: string;
  };
}

export enum themeEnum {
  Light = 'light',
  Dark = 'dark',
}

export type LocalStorageKey = 'storedTheme';
