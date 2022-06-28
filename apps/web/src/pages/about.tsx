import { Page } from 'ui/ux';

import { OurMissionSection } from '../components/about/OurMissionSection';
import { OurStorySection } from '../components/about/OurStorySection';
import { WhatWeDoSection } from '../components/home/WhatWeDoSection';

export default function Index() {
  return (
    <Page>
      <OurMissionSection />
      <OurStorySection />
      <WhatWeDoSection />
    </Page>
  );
}
