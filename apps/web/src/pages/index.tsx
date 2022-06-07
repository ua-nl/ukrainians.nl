import { Page, Section } from 'ui/ux';

import { ActionCards } from '../components/ActionSection';
import { useUIContext } from '../lib/uiContext';

export default function Index() {
  const ctx = useUIContext();
  return (
    <Page ctx={ctx}>
      <Section>
        <ActionCards />
      </Section>
    </Page>
  );
}
