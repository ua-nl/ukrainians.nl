import { ButtonPrimary, ButtonSecondary, Page, Spacer } from 'ui/ux';
import { useUIContext } from '../lib/uiContext';

export default function Index() {
  const ctx = useUIContext();
  if (ctx === undefined) {
    return <>N/A</>;
  }
  return (
    <Page ctx={ctx}>
      <ButtonPrimary>Solid primary</ButtonPrimary>
      <Spacer />
      <ButtonSecondary>Secondary primary</ButtonSecondary>
      <Spacer />
      <ButtonPrimary>Solid primary</ButtonPrimary>
    </Page>
  );
}
