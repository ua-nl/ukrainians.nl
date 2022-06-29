import Image from 'next/image';
import { Col, H1, ImgBox, Para, Section } from 'ui/ux';

import { PageContent } from '../../types/strapi-data';

export const AboutUsSection = ({
  title,
  description,
  pictures,
}: Partial<PageContent>) => {
  return (
    <Section>
      <Col.Container>
        <Col.Item vAlign="center" sm={6}>
          <H1>{title}</H1>
          <Para>{description}</Para>
        </Col.Item>
        <Col.Item sm={6}>
          <ImgBox sx={{ float: 'right', marginLeft: '25%' }}>
            <Image
              src={pictures?.[0].url}
              width={pictures?.[0].width}
              height={pictures?.[1].height}
            />
          </ImgBox>
          <ImgBox sx={{ float: 'left', width: '50%', marginTop: '-30%' }}>
            <Image
              src={pictures?.[1].url}
              width={pictures?.[1].width}
              height={pictures?.[1].height}
            />
          </ImgBox>
        </Col.Item>
      </Col.Container>
    </Section>
  );
};
