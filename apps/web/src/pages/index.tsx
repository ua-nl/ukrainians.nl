import { Page } from 'ui/ux';

import { AchievementsSection } from '../components/home/AchievementsSection';
import { MainHeaderSection } from '../components/home/MainHeaderSection';
import { PartnersSection } from '../components/home/PartnersSection';
import { WhatWeDoSection } from '../components/home/WhatWeDoSection';
import { WhoWeAreSection } from '../components/home/WhoWeAreSection';

export default function Index() {
  return (
    <Page>
      <MainHeaderSection />
      <AchievementsSection />
      <WhoWeAreSection />
      <WhatWeDoSection />
      <PartnersSection />
    </Page>
  );
}
