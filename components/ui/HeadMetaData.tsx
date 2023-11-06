import React from 'react';
import Head from 'next/head';

export const HeadMetaData: React.FC<{
  title?: string;
  metaDescription?: string;
  ogImageUrl?: string;
  pathname?: string;
}> = ({
  title = 'Arsitektur Developer Indonesia',
  metaDescription = 'Dhisan Atelier: Arsitektur Inovatif untuk Developer Bangunan di Indonesia.',
  ogImageUrl = 'https://cdn.discordapp.com/attachments/725228007501070336/1170759591693394021/metadata-og.png?ex=655a35d6&is=6547c0d6&hm=98326de7e199c799bf9efcd7c78121dc2f499565db3edaf7c660b44e8c915d35&',
  pathname = '',
}) => {
  const defaultTitle = 'Dhisan Atelier';

  const baseUrl =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : 'https://dhisanatelier.co';

  const pageUrl = new URL(pathname, baseUrl).toString();

  return (
    <Head>
      <title>{title + ' | ' + defaultTitle}</title>

      {/* metadata */}
      <meta name="title" content={title + ' | ' + defaultTitle} />
      <meta name="description" content={metaDescription} />
      <meta name="og:image" itemProp="image" content={ogImageUrl} />
      <meta property="og:url" content={pageUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:image" itemProp="image" content={ogImageUrl} />
      <meta property="og:title" content={title + ' | ' + defaultTitle} />
      <meta property="og:description" content={metaDescription} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={pageUrl} />
      <meta name="twitter:title" content={title + ' | ' + defaultTitle} />
      <meta name="twitter:image" content={ogImageUrl} />
      <meta property="twitter:description" content={metaDescription} />
    </Head>
  );
};

export default HeadMetaData