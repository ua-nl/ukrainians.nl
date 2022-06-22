import { Page } from 'ui/ux';

import { AboutUsSection } from '../components/home/AboutUsSection';
import { AchievementsSection } from '../components/home/AchievementsSection';
import { MainHeaderSection } from '../components/home/MainHeaderSection';
import { PartnersSection } from '../components/home/PartnersSection';
import { WhatWeDoSection } from '../components/home/WhatWeDoSection';

export default function Index() {
  return (
    <Page>
      <MainHeaderSection />
      <AboutUsSection />
      <WhatWeDoSection />
      <AchievementsSection />
      <PartnersSection />
    </Page>
  );
}
