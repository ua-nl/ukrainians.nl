import { Bread, Page } from 'ui/ux';

import { DonateGoodsSection } from '../components/humanitarianAid/DonateGoodsSection';
import { ForOrganizationsSection } from '../components/humanitarianAid/ForOrganizationsSection';
import { WhatDoWeNeedSection } from '../components/humanitarianAid/WhatDoWeNeedSection';

export default function Index() {
  return (
    <Page>
      <Bread
        history={[{ label: 'Home', href: '/' }]}
        current="Humanitarian Aid"
      />

      <DonateGoodsSection />
      <WhatDoWeNeedSection />
      <ForOrganizationsSection />
    </Page>
  );
}
