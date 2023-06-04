import * as React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

type Props = {
  title?: string
}

export const Seo: React.FC<Props> = ({ title }) => {
  const router = useRouter()

  const _url = `${process.env.NEXT_PUBLIC_URL}${router.asPath}`
  const _title = title ? `${title} | Matej Lauko` : 'Matej Lauko'
  const _description =
    'UI/UX engineer, on a mission to bring web products with beautiful and intuitive user interfaces to people.'

  return (
    <Head>
      <title>{_title}</title>
      <meta name="description" content={_description} />
      <meta name="author" content="Matej Lauko" />

      <link rel="canocinal" href={_url} />
      <meta name="robots" content="index,follow" />
      <meta name="googlebot" content="index,follow" />

      <meta name="twitter:site" content="@matejlauko" />
      <meta name="twitter:creator" content="@matejlauko" />
      <meta name="twitter:card" content="summary" />

      <meta property="og:url" content={_url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={_title} />
      <meta property="og:description" content={_description} />
    </Head>
  )
}
