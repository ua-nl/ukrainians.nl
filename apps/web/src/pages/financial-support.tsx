import { Banner, Bread, Button, H1, Page } from 'ui/ux';

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
      <Banner>
        <H1 center mb={10}>
          Do you want to support by non-financial matters?
        </H1>
        <div>
          <Button>Contact us</Button>
        </div>
      </Banner>
    </Page>
  );
}
