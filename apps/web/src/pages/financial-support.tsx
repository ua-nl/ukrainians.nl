import { PageProps, StaticPageProps } from 'ui/types';
import { Bread, Page } from 'ui/ux';

import { BannerSection } from '../components/financialSupport/BannerSection';
import { ContributionSection } from '../components/financialSupport/ContributionSection';
import { HelpSection } from '../components/financialSupport/HelpSection';
import { getStrapiSingleType } from '../lib/getStrapiData';

export default function Index({ data }: PageProps) {
  const [contribution, help, nonFinancial] = data;

  return (
    <Page>
      <Bread
        history={[{ label: 'Home', href: '/' }]}
        current="Financial support"
        bgColor="grey"
      />
      <ContributionSection
        title={contribution.title}
        description={contribution.description}
        pictures={contribution.pictures}
      />
      <HelpSection
        title={help.title}
        description={help.description}
        cards={help.cards}
      />
      <BannerSection title={nonFinancial.title} />
    </Page>
  );
}

export async function getStaticProps(): StaticPageProps {
  const response = await getStrapiSingleType('/financial-aid');

  return {
    props: {
      data: response,
    },
  };
}
