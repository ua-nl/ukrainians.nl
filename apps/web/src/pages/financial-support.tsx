import { Bread, Page } from 'ui/ux';

import { BannerSection } from '../components/financialSupport/BannerSection';
import { ContributionSection } from '../components/financialSupport/ContributionSection';
import { HelpSection } from '../components/financialSupport/HelpSection';

export default function Index() {
  return (
    <Page>
      <Bread
        history={[{ label: 'Home', href: '/' }]}
        current="Financial support"
        bgColor="grey"
      />
      <ContributionSection />
      <HelpSection />
      <BannerSection />
    </Page>
  );
}
