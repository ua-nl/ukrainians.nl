import { Banner, Button, H1, Section } from 'ui/ux';

import { PageContent } from '../../types/strapi-content.types';

export const BannerSection = ({ title }: Pick<PageContent, 'title'>) => {
  return (
    <Section first>
      <Banner>
        <H1 center mb={10}>
          {title}
        </H1>
        <div>
          <Button>Contact us</Button>
        </div>
      </Banner>
    </Section>
  );
};
