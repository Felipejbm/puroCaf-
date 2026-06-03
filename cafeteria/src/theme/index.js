import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#8B4513",
      light: "#C4922A",
      dark: "#5C3317",
      contrastText: "#FAF6EE",
    },
    secondary: {
      main: "#C4922A",
      light: "#F5EDD6",
      dark: "#2C1A0E",
      contrastText: "#FAF6EE",
    },
    background: {
      default: "#FAF6EE",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#1A0F07",
      secondary: "#7A5C3A",
    },
    divider: "rgba(180,140,90,0.15)",
  },
  typography: {
    fontFamily: '"Lato", sans-serif',
    h1: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 700,
    },
    h2: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 700,
    },
    h3: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 700,
    },
    h4: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600,
    },
    h5: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600,
    },
    h6: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600,
    },
    button: {
      fontFamily: '"Lato", sans-serif',
      fontWeight: 700,
      letterSpacing: "1.5px",
    },
    overline: {
      fontFamily: '"Lato", sans-serif',
      fontWeight: 700,
      letterSpacing: "2px",
    },
  },
  shape: {
    borderRadius: 0,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          textTransform: "uppercase",
          letterSpacing: "1.5px",
          fontWeight: 700,
          fontSize: "11px",
          boxShadow: "none",
          "&:hover": { boxShadow: "none" },
        },
        contained: {
          "&:hover": { transform: "translateY(-1px)" },
          transition: "all 0.2s ease",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          boxShadow: "none",
          border: "1px solid rgba(180,140,90,0.15)",
          transition: "transform 0.2s, box-shadow 0.2s",
          "&:hover": {
            transform: "translateY(-3px)",
            boxShadow: "0 12px 40px rgba(90,40,10,0.13)",
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: { borderRadius: 0 },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: { borderRadius: 0 },
        notchedOutline: { borderColor: "rgba(140,90,40,0.25)" },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: { borderRadius: 0 },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: { borderRadius: 0 },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { borderRadius: 2 },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: { borderColor: "rgba(180,140,90,0.15)" },
      },
    },
  },
});
