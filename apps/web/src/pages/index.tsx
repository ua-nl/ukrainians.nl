import { useRouter } from 'next/router';
import useSwr from 'swr';
import { ButtonPrimary, ButtonSecondary, Spacer } from 'ui/ux';
import { appCtx } from './AppCtx';
import { TopMenu } from '../../../../packages/ui/src/components/TopMenu';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Web() {
  const router = useRouter();
  const { lang = 'en' } = router.query;
  const { data, error } = useSwr(`/api/config/${lang}`, fetcher);

  if (error) {
    return (
      <>
        <h1>Failed to load APP</h1>
        <p>{String(error)}</p>
      </>
    );
  }
  if (!data) {
    return <h1>Loading...</h1>;
  }

  return (
    <appCtx.Provider value={data}>
      <TopMenu pages={data.menu} />
      <ButtonPrimary>Solid primary</ButtonPrimary>
      <Spacer />
      <ButtonSecondary>Secondary primary</ButtonSecondary>
      <Spacer />
      <ButtonPrimary>Solid primary</ButtonPrimary>
    </appCtx.Provider>
  );
}
