import { Bread, Page } from 'ui/ux';

import { EventsSection } from '../components/latestNews/EventsSection';
import { LatestNewsSection } from '../components/latestNews/LatestNewsSection';
import { getStrapiContent } from '../lib/strapiRequest';
import { PageContent } from '../types/strapi-data';

type PageProps = {
  data: PageContent[];
};

export default function Index({ data }: PageProps) {
  const [latestNews] = data;

  return (
    <Page>
      <Bread history={[{ label: 'Home', href: '/' }]} current="Latest news" />
      <LatestNewsSection
        title={latestNews.title}
        description={latestNews.description}
        pictures={latestNews.pictures}
      />
      <EventsSection cards={latestNews.cards} />
    </Page>
  );
}

export async function getStaticProps(): Promise<{
  props: PageProps;
}> {
  const response = await getStrapiContent('/latest-news');

  return {
    props: {
      data: response,
    },
  };
}
