import { ToastContainer } from "react-toastify"
import { CssBaseline, ThemeProvider } from "@mui/material"

import type { AppProps } from "next/app"
import { Roboto } from "next/font/google"

import { theme } from "@/styles/theme"

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <div className={roboto.className}>
          <Component {...pageProps} />
        </div>
        <ToastContainer />
      </CssBaseline>
    </ThemeProvider>
  )
}
