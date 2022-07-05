import { Page } from 'ui/ux';

import { AboutUsSection } from '../components/home/AboutUsSection';
import { AchievementsSection } from '../components/home/AchievementsSection';
import { MainHeaderSection } from '../components/home/MainHeaderSection';
import { PartnersSection } from '../components/home/PartnersSection';
import { WhatWeDoSection } from '../components/home/WhatWeDoSection';
import { getStrapiSingleType } from '../lib/strapiRequest';
import { PageProps, StaticPageProps } from '../types/page-content.types';

export default function Index({ data }: PageProps) {
  const [mainHeader, aboutUs, whatWeDo, achievements, sponsors] = data;

  return (
    <Page>
      <MainHeaderSection
        title={mainHeader.title}
        description={mainHeader.description}
        pictures={mainHeader.pictures}
      />
      <AboutUsSection
        title={aboutUs.title}
        description={aboutUs.description}
        pictures={aboutUs.pictures}
      />
      <WhatWeDoSection title={whatWeDo.title} cards={whatWeDo.cards} />
      <AchievementsSection
        title={achievements.title}
        cards={achievements.cards}
      />
      <PartnersSection title={sponsors.title} pictures={sponsors.pictures} />
    </Page>
  );
}

export async function getStaticProps(): StaticPageProps {
  const response = await getStrapiSingleType('/homepage');

  return {
    props: {
      data: response,
    },
  };
}
