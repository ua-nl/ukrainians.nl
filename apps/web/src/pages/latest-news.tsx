import { Bread, Page } from 'ui/ux';

import { EventsSection } from '../components/latestNews/EventsSection';
import { LatestNewsSection } from '../components/latestNews/LatestNews';

export default function Index() {
  return (
    <Page>
      <Bread history={[{ label: 'Home', href: '/' }]} current="Latest news" />

      <LatestNewsSection />
      <EventsSection />
    </Page>
  );
}
