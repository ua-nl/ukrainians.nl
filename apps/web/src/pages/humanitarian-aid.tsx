import { PageProps, StaticPageProps } from 'ui/types';
import { Bread, Page } from 'ui/ux';

import { DonateGoodsSection } from '../components/humanitarianAid/DonateGoodsSection';
import { ForOrganizationsSection } from '../components/humanitarianAid/ForOrganizationsSection';
import { WhatDoWeNeedSection } from '../components/humanitarianAid/WhatDoWeNeedSection';
import { getStrapiSingleType } from '../lib/strapiRequest';

export default function Index({ data }: PageProps) {
  const [goods, whatWeNeed, organizations] = data;

  return (
    <Page>
      <Bread
        history={[{ label: 'Home', href: '/' }]}
        current="Humanitarian Aid"
      />

      <DonateGoodsSection
        title={goods.title}
        description={goods.description}
        pictures={goods.pictures}
      />
      <WhatDoWeNeedSection
        title={whatWeNeed.title}
        description={whatWeNeed.description}
        pictures={whatWeNeed.pictures}
      />
      <ForOrganizationsSection
        title={organizations.title}
        description={organizations.description}
        cards={organizations.cards}
      />
    </Page>
  );
}

export async function getStaticProps(): StaticPageProps {
  const response = await getStrapiSingleType('/humanitarian-aid');

  return {
    props: {
      data: response,
    },
  };
}
