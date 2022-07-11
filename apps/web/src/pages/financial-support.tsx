import { Bread, Page } from 'ui/ux';

import { BlockSection } from '../components/financialSupport/BlockSection';
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
      <BlockSection />
    </Page>
  );
}
