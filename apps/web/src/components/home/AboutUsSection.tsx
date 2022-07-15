import { PageContent } from 'ui/types';
import { Col, H1, Img, ImgBox, Para, Section } from 'ui/ux';

export const AboutUsSection = ({
  title,
  description,
  pictures,
}: Pick<PageContent, 'title' | 'description' | 'pictures'>) => {
  return (
    <Section>
      <Col.Container>
        <Col.Item vAlign="center" sm={6}>
          <H1>{title}</H1>
          <Para>{description}</Para>
        </Col.Item>
        <Col.Item sm={6}>
          <ImgBox sx={{ float: 'right', marginLeft: '15%' }}>
            {pictures && <Img picture={pictures[0]} alt={title} />}
          </ImgBox>
          <ImgBox sx={{ float: 'left', width: '60%', marginTop: '-30%' }}>
            {pictures && <Img picture={pictures[1]} alt={title} />}
          </ImgBox>
        </Col.Item>
      </Col.Container>
    </Section>
  );
};
