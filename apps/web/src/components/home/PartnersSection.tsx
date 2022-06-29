import Image from 'next/image';
import { H2, Section } from 'ui/ux';

import { PageContent } from '../../types/strapi-data';

export const PartnersSection = ({
  title,
  pictures,
}: Pick<PageContent, 'title' | 'pictures'>) => {
  return (
    <Section thin bgColor="grey">
      <H2 center mb={8}>
        {title}
      </H2>
      <Image
        src={pictures?.[0].url}
        alt={title}
        width={pictures?.[0].width}
        height={pictures?.[0].height}
      />
    </Section>
  );
};
