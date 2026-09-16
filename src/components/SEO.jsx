import { Helmet } from "react-helmet-async";

function SEO({
  title,
  description,
  path = "/",
}) {
  const siteUrl = "https://elevaralegacy.com";
  const canonicalUrl = `${siteUrl}${path}`;

  return (
    <Helmet>
      <title>{title}</title>

      <meta
        name="description"
        content={description}
      />

      <link
        rel="canonical"
        href={canonicalUrl}
      />

      {/* Open Graph */}
      <meta property="og:title" content={title} />

      <meta
        property="og:description"
        content={description}
      />

      <meta
        property="og:type"
        content="website"
      />

      <meta
        property="og:url"
        content={canonicalUrl}
      />

      <meta
        property="og:image"
        content={`${siteUrl}/preview.jpg`}
      />

      <meta
        property="og:image:alt"
        content="Elevara Legacy - Empowering Women"
      />

      <meta
        property="og:site_name"
        content="Elevara Legacy"
      />

      {/* Twitter */}
      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <meta
        name="twitter:title"
        content={title}
      />

      <meta
        name="twitter:description"
        content={description}
      />

      <meta
        name="twitter:image"
        content={`${siteUrl}/preview.jpg`}
      />
    </Helmet>
  );
}

export default SEO;