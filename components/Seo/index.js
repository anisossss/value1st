import Head from "next/head";

export const Meta = ({ title, keywords, description, ogUrl, thumbnail }) => {


  return (
    <>
      <Head>

        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content={keywords}
        />

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#2b5797" />
        <meta name="msapplication-TileColor" content="#2b5797" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="VALUE1ST" />
        <meta
          name="copyright"
          content="All rights reserved, 2023. VALUE1ST"
        />
        <meta httpEquiv="content-language" content="en" />
        <meta property="og:image" content={thumbnail} />

        {/* Open Graph / Facebook */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={ogUrl} />
        <meta property="og:site_name" content={title} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:url" content={ogUrl} />
      </Head>

    </>
  );

};



Meta.defaultProps = {
  title: "VALUE1ST",
  keywords: "digital marketing, social media",
  description: "Value First, We boost your business within the new era of digital marketing and social media.",
  thumbnail: "https://www.google.com"
}

