import { Banner, Button, H1, Section } from 'ui/ux';

export const BannerSection = () => {
  return (
    <Section first>
      <Banner>
        <H1 center mb={10}>
          Do you want to support by non-financial matters?
        </H1>
        <div>
          <Button>Contact us</Button>
        </div>
      </Banner>
    </Section>
  );
};
