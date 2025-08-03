"use client";

import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    ochre: Palette["primary"];
    ashblack: Palette["primary"];
    customorange: Palette["primary"];
    customblue: Palette["primary"];
  }
  interface PaletteOptions {
    ochre?: PaletteOptions["primary"];
    ashblack?: PaletteOptions["primary"];
    customorange?: PaletteOptions["primary"];
    customblue?: PaletteOptions["primary"];
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    ochre: true;
    ashblack: true;
    customorange: true;
    customblue: true;
  }
}

declare module "@mui/material/Badge" {
  interface BadgePropsColorOverrides {
    ochre: true;
    ashblack: true;
    customorange: true;
    customblue: true;
  }
}

declare module "@mui/material/LinearProgress" {
  interface LinearProgressPropsColorOverrides {
    ochre: true;
    ashblack: true;
    customorange: true;
    customblue: true;
  }
}
declare module "@mui/material/CircularProgress" {
  interface LinearProgressPropsColorOverrides {
    ochre: true;
    ashblack: true;
    customorange: true;
    customblue: true;
  }
}

const theme = createTheme({
  palette: {
    ochre: {
      main: "#E3D026",
      light: "#E9DB5D",
      dark: "#A29415",
      contrastText: "#242105",
    },
    ashblack: {
      main: "#252527",
      light: "#3c3c3f",
      dark: "#101011",
      contrastText: "#ffffff",
    },
    customorange: {
      main: "#F18B21",
      light: "#f5a347",
      dark: "#b26518",
      contrastText: "#000",
    },
    customblue: {
      main: "#1E88E5",
      light: "#6AB7FF",
      dark: "#005CB2",
      contrastText: "#fff",
    },
  },
});

export default theme;
