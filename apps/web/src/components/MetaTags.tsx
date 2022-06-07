import { FC } from 'react';
import { META_TAGS } from '../lib/metaTags';

export const MetaTags: FC = () => (
  <>
    <meta name="description" content={META_TAGS.description} />
    <meta name="keywords" content={META_TAGS.keywords} />

    <meta property="og:type" content="website" />
    <meta property="og:url" content={META_TAGS.url} />
    <meta property="og:site_name" content={META_TAGS.siteName} />
    <meta property="og:title" content={META_TAGS.siteName} />
    <meta property="og:description" content={META_TAGS.description} />
    <meta property="og:image" content={META_TAGS.img} />

    <meta name="twitter:site" content={META_TAGS.url} />
    <meta name="twitter:title" content={META_TAGS.siteName} />
    <meta name="twitter:description" content={META_TAGS.description} />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:image" content={META_TAGS.img} />
  </>
);
