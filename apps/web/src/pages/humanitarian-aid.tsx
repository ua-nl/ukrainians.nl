import { Bread, Page } from 'ui/ux';

import { DonateGoodsSection } from '../components/humanitarianAid/DonateGoodsSection';
import { ForOrganizationsSection } from '../components/humanitarianAid/ForOrganizationsSection';
import { WhatDoWeNeedSection } from '../components/humanitarianAid/WhatDoWeNeedSection';
import { getStrapiContent } from '../lib/strapiRequest';
import { PageContent } from '../types/strapi-data';

type PageProps = {
  data: PageContent[];
};

export default function Index({ data }: PageProps) {
  const [goods, whatWeNeed, organizations] = data;
  console.log(data);

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
        cards={whatWeNeed.cards}
        pictures={whatWeNeed.pictures}
      />
      <ForOrganizationsSection
        title={organizations.title}
        description={organizations.description}
        description2={organizations.description2}
        cards={organizations.cards}
      />
    </Page>
  );
}

export async function getStaticProps(): Promise<{
  props: PageProps;
}> {
  const response = await getStrapiContent('/humanitarian-aid');

  return {
    props: {
      data: response,
    },
  };
}
