import { H1, Section } from 'ui/ux';

import { ActionCards } from '../ActionSection';

export const WhatWeDoSection = () => {
  return (
    <Section bgColor="lightGrey">
      <H1 center mb={16}>
        WHAT WE DO
      </H1>
      <ActionCards />
    </Section>
  );
};
