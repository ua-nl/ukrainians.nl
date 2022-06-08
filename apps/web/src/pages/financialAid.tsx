import { Page } from 'ui/ux';

import { BlockSection } from '../components/financialAid/BlockSection';
import { ContributionSection } from '../components/financialAid/ContributionSection';
import { HelpSection } from '../components/financialAid/HelpSection';

export default function Index() {
  return (
    <Page>
      <ContributionSection />
      <HelpSection />
      <BlockSection />
    </Page>
  );
}
