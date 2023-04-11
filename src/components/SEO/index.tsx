import Head from "next/head"

interface SEOProps {
  title: string
  description: string
  image: string
  url: string
}

export function SEO({ title, description, image, url }: SEOProps) {
  return (
    <Head>
      {title && (
        <>
          <title>{title}</title>
          <meta name="title" content={title} />
          <meta property="og:title" content={title} />
          <meta property="twitter:title" content={title} />
        </>
      )}

      {description && (
        <>
          <meta property="og:description" content={description} />
          <meta property="twitter:description" content={description} />
          <meta name="description" content={description} />
        </>
      )}

      {url && (
        <>
          <meta property="og:url" content={url} />
          <meta property="twitter:url" content={url} />
        </>
      )}

      {image && (
        <>
          <meta property="og:image" content={`${url}${image}`} />
          <meta property="twitter:image" content={`${url}${image}`} />
          <meta property="twitter:card" content="summary_large_image" />
        </>
      )}

      <meta property="og:type" content="website" />
    </Head>
  )
}
