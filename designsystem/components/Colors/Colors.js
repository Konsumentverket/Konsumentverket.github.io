const defaultTheme = {
  theme1: {
    xDark: "#162259",
    dark: "#00345c",
    midDark: "#00518f",
    mid: "#0061c2",
    midLight: "#ddf1fd",
    light: "#ebf6fd",
    xLight: "#ebf6fd"
  },
  theme2: {
    xDark: "#8C002D",
    dark: "#8C002D",
    midDark: "#A10042",
    mid: "#B50156",
    midLight: "#B50156",
    light: "#F6E1EB",
    xLight: "#F6E1EB"
  },
  theme3: {
    xDark: "#161616",
    dark: "#4D4D4D",
    midDark: "#6B6B6B",
    mid: "#6B6B6B",
    midLight: "#D0D0D0",
    light: "#E5E3E3",
    xLight: "#F2F0F0"
  },
  states: {
    visited: "#800080",
    visitedInverted: "#FFC7C2",
    focus: "#00944B"
  },
  common: {
    white: "#ffffff",
    black: "#000000",
    warning: "#E7342B",
    success: "#007A3E",
    cyan: "#92DCFA"
  }
};

defaultTheme.buttons = {
  primary: {
    backgroundColor: defaultTheme.theme1.mid,
    hover: defaultTheme.theme1.midDark,
    active: defaultTheme.theme1.xDark
  },
  secondary: {
    textColor: defaultTheme.theme1.mid,
    borderColor: defaultTheme.theme1.mid,
    hover: defaultTheme.theme1.midLight,
    active: defaultTheme.theme1.xDark
  }
};

const eccTheme = {
  theme1: {
    xDark: "#162259",
    dark: "#314575",
    midDark: "#314575",
    mid: "#004a93",
    midLight: "#E7F6FB",
    light: "#D7E6ED"
  },
  theme2: {
    xLight: "#F1F1F1",
    midLight: "#eaeae9",
    light: "#e7f0f4"
  },
  theme3: {
    xLight: "#F2F0F0",
    light: "#D0D0D0",
    mid: "#6B6B6B",
    dark: "#4D4D4D",
    xDark: "#161616"
  },
  buttons: {
    primary: {
      backgroundColor: "#008054",
      hover: "#004D32",
      active: "#001A11"
    },
    secondary: {
      textColor: "#008054",
      borderColor: "#008054",
      hover: "#E5F2ED",
      active: "#001A11"
    }
  },
  states: {
    focus: "#F59C00"
  }
};

const mfsTheme = {
  theme1: {
    xDark: "#162259",
    dark: "#314575",
    midDark: "#314575",
    mid: "#0061c2",
    midLight: "#FDEBCC",
    light: "#FDEBCC"
  },
  theme2: {
    xDark: "#8C002D",
    dark: "#8C002D",
    midDark: "#A10042",
    mid: "#ddf1fd",
    midLight: "#F59C00",
    light: "#FDEBCC",
    xLight: "#F6E1EB"
  },
  theme3: {
    xDark: "#161616",
    dark: "#4D4D4D",
    midDark: "#6B6B6B",
    mid: "#6B6B6B",
    midLight: "#D0D0D0",
    light: "#e7e8ee",
    xLight: "#F4F8FB"
  }
};

const rapportTheme = {
  theme1: {
    xDark: "#162259",
    dark: "#314575",
    midDark: "#314575",
    mid: "#0061c2",
    midLight: "#FDEBCC",
    light: "#FDEBCC"
  },
  theme2: {
    xDark: "#8C002D",
    dark: "#8C002D",
    midDark: "#A10042",
    mid: "#ddf1fd",
    midLight: "#F59C00",
    light: "#FDEBCC",
    xLight: "#F6E1EB"
  },
  theme3: {
    xDark: "#161616",
    dark: "#4D4D4D",
    midDark: "#6B6B6B",
    mid: "#6B6B6B",
    midLight: "#D0D0D0",
    light: "#e7e8ee",
    xLight: "#F4F8FB"
  }
};

const colors =
  process.env.THEME === "ecc"
    ? Object.assign({}, defaultTheme, eccTheme)
    : process.env.THEME === "mfs"
    ? Object.assign({}, defaultTheme, mfsTheme)
    : defaultTheme;

export { colors };
