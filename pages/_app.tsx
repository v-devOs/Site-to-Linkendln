import type { AppProps } from 'next/app'

import { CssBaseline, ThemeProvider } from '@mui/material'

import { darkTheme } from '@/theme'

import '@/styles/globals.css'
import { UIProvider } from '@/context/ui'

export default function App({ Component, pageProps }: AppProps) {
  return (

    <UIProvider>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline/>
        <Component {...pageProps} />
      </ThemeProvider>
    </UIProvider>
    
  )
}
