import { createUI, theme, UIProvider } from '@matejlauko/ui'
import { tokens } from '../theme'
import { Analytics } from '@vercel/analytics/react'

createUI(tokens)

import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <UIProvider>
        <ThemeProvider
          defaultTheme="dark"
          enableSystem={false}
          attribute="class"
          forcedTheme={theme}
        >
          <Component {...pageProps} />
        </ThemeProvider>
      </UIProvider>

      <Analytics />
    </>
  )
}

export default MyApp
