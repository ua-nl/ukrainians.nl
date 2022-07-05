import { PageProps, StaticPageProps } from 'ui/types';
import { Bread, Page } from 'ui/ux';

import { OurMissionSection } from '../components/about/OurMissionSection';
import { OurStorySection } from '../components/about/OurStorySection';
import { WhatWeDoSection } from '../components/home/WhatWeDoSection';
import { getStrapiSingleType } from '../lib/strapiRequest';

export default function Index({ data }: PageProps) {
  const [ourMission, ourStory, whatWeDo] = data;

  return (
    <Page>
      <Bread history={[{ label: 'Home', href: '/' }]} current="About us" />

      <OurMissionSection
        title={ourMission.title}
        description={ourMission.description}
        pictures={ourMission.pictures}
      />
      <OurStorySection
        title={ourStory.title}
        pictures={ourStory.pictures}
        description={ourStory.description}
        description2={ourStory.description2}
      />
      <WhatWeDoSection title={whatWeDo.title} cards={whatWeDo.cards} />
    </Page>
  );
}

export async function getStaticProps(): StaticPageProps {
  const response = await getStrapiSingleType('/about-us');

  return {
    props: {
      data: response,
    },
  };
}
