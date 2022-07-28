import { News, PageContent, StaticProps } from 'ui/types';
import { Bread, Page } from 'ui/ux';

import { EventsSection } from '../../components/latestNews/EventsSection';
import { LatestNewsSection } from '../../components/latestNews/LatestNewsSection';
import {
  getStrapiCollectionTypes,
  getStrapiSingleType,
} from '../../lib/getStrapiData';

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

export async function getStaticProps(): StaticProps<PageProps> {
  const pageContent = await getStrapiSingleType('/latest-news');
  const newsCollection = await getStrapiCollectionTypes('/all-news', {});

  return {
    props: {
      pageContent,
      news: newsCollection,
    },
  };
}
