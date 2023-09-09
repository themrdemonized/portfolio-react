import { Html, Head, Main, NextScript } from 'next/document'
import { getInitColorSchemeScript } from '@mui/joy/styles';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      </Head>
      <body>
        {getInitColorSchemeScript({ defaultMode: 'system' })}
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
