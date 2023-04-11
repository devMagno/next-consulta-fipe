import { ToastContainer } from "react-toastify"
import { CssBaseline, responsiveFontSizes, ThemeProvider } from "@mui/material"

import type { AppProps } from "next/app"
import { Roboto } from "next/font/google"

import { theme } from "@/styles/theme"

import { FipeProvider } from "@/contexts/FipeContext"

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <FipeProvider>
      <ThemeProvider theme={responsiveFontSizes(theme)}>
        <CssBaseline>
          <div className={roboto.className}>
            <Component {...pageProps} />
          </div>
          <ToastContainer />
        </CssBaseline>
      </ThemeProvider>
    </FipeProvider>
  )
}
