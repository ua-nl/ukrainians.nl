import { Bread, Page } from 'ui/ux';

import { EventsSection } from '../components/latestNews/EventsSection';
import { LatestNewsSection } from '../components/latestNews/LatestNewsSection';
import {
  getStrapiCollectionTypes,
  getStrapiSingleType,
} from '../lib/strapiRequest';
import { News, PageContent } from '../types/strapi-data';

type PageProps = {
  pageContent: PageContent[];
  news: News[];
};

export default function Index({ pageContent, news }: PageProps) {
  const [latestNews] = pageContent;

  return (
    <Page>
      <Bread history={[{ label: 'Home', href: '/' }]} current="Latest news" />
      <LatestNewsSection
        title={latestNews.title}
        description={latestNews.description}
        pictures={latestNews.pictures}
      />
      <EventsSection cards={news} />
    </Page>
  );
}

export async function getStaticProps(): Promise<{
  props: PageProps;
}> {
  const pageContent = await getStrapiSingleType('/latest-news');
  const newsCollection = await getStrapiCollectionTypes('/all-news');

  return {
    props: {
      pageContent,
      news: newsCollection,
    },
  };
}
