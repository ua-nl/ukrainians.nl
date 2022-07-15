import { PageContent } from 'ui/types';
import { H2, Img, Section } from 'ui/ux';

export const PartnersSection = ({
  title,
  pictures,
}: Pick<PageContent, 'title' | 'pictures'>) => {
  return (
    <Section thin bgColor="grey">
      <H2 center mb={8}>
        {title}
      </H2>
      {pictures && <Img picture={pictures[0]} alt={title} />}
    </Section>
  );
};
