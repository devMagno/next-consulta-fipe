import { createTheme } from "@mui/material"

export const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video":
          {
            margin: "0",
            padding: "0",
            border: "0",
            fontSize: "100%",
            font: "inherit",
            verticalAlign: "baseline",
          },
        "article, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section":
          {
            display: "block",
          },
        body: { lineHeight: 1, backgroundColor: "#f8f7fc" },
        "ol, ul": { listStyle: "none" },
        "blockquote, q": { quotes: "none" },
        "blockquote:before, blockquote:after,\nq:before, q:after": {
          content: ["''", "none"],
        },
        table: { borderCollapse: "collapse", borderSpacing: "0" },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontSize: "24px",
          fontWeight: "bold",
          padding: "24px 8px",
          borderRadius: "300px",
        },
      },
    },
  },

  typography: {
    fontFamily: ["Roboto", "sans-serif"].join(","),
  },

  palette: {
    primary: {
      main: "#5d00bf",
      dark: "#4c1d95",
    },
    success: {
      light: "#dcf5f2",
      main: "#00a38c",
    },
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1536,
      xl: 1872,
    },
  },
})
