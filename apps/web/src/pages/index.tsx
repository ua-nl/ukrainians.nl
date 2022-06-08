import { Page, Section, TextInput } from 'ui/ux';

import { ActionCards } from '../components/ActionSection';

export default function Index() {
  return (
    <Page>
      <Section>
        <TextInput id="label" label="Label" placeholder="Placeholder text" />
        <ActionCards />
      </Section>
    </Page>
  );
}
