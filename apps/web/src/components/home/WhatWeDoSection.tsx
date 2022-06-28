import { H1, Section } from 'ui/ux';

import { ActionCards } from '../ActionSection';

export const WhatWeDoSection = () => {
  return (
    <Section thin>
      <H1 center mb={8}>
        WHAT WE DO
      </H1>
      <ActionCards />
    </Section>
  );
};
