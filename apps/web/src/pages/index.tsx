import { Page, Section } from 'ui/ux';
import { useUIContext } from '../lib/uiContext';
import { ActionCards } from '../components/ActionSection';

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
