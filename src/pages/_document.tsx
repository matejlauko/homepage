import { Head, Html, Main, NextScript } from 'next/document';
import { globalStyles, getCssText, globalCss, resetStyles } from '@lauko/ui';

const localGlobalStyles = globalCss({
  '@font-face': [
    {
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: '100 900',
      fontDisplay: 'swap',
      src: 'url("fonts/Inter.var.woff2") format("woff2")',
    },
    {
      fontFamily: 'Work Sans',
      fontStyle: 'italic',
      fontWeight: '100 900',
      fontDisplay: 'swap',
      src: 'url("fonts/Inter-italic.var.woff2") format("woff2")',
    },
  ],

  '@lg': {
    body: {
      scrollbarGutter: 'stable both-edges',
    },
  },

  html: {
    fontFamily: '"Inter", sans-serif',
  },
});

const applyResetStyles = globalCss(resetStyles);
const applyGlobalStyles = globalCss(globalStyles);

function Document() {
  applyResetStyles();
  applyGlobalStyles();
  localGlobalStyles();

  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />

        <link rel="icon" href="/favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="mask-picon" href="/favicon/safari-pinned-tab.svg" color="#f9d205" />
        <meta name="msapplication-TileColor" content="#161616" />
        <meta name="theme-color" content="#161616" />

        <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
