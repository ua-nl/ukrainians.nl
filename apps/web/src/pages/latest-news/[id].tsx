import { styled } from '@mui/system';
import { News, StaticProps } from 'ui/types';
import { Bread, H1, Img, Markdown, Page, Section } from 'ui/ux';

import {
  getStrapiCollectionTypes,
  getStrapiItem,
} from '../../lib/getStrapiData';

type PathProps = {
  params: { id: string };
};

type NewsProps = {
  news: News;
};

const NewsContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: 700,
  gap: theme.spacing(5),
}));

export default function NewsPage({ news }: NewsProps) {
  return (
    <Page>
      <Bread
        history={[
          { label: 'Home', href: '/' },
          { label: 'Latest news', href: '/latest-news' },
        ]}
        current=""
      />
      <Section first>
        <NewsContainer>
          <H1>{news.title}</H1>
          <div>
            {news.pictures &&
              news.pictures.map((picture, index) => (
                <Img key={index} picture={picture} />
              ))}
          </div>
          <Markdown>{news.description}</Markdown>
        </NewsContainer>
      </Section>
    </Page>
  );
}

export async function getStaticProps({
  params,
}: PathProps): StaticProps<NewsProps> {
  const news = await getStrapiItem(`/all-news/${params.id}`);

  return {
    props: { news },
  };
}

export async function getStaticPaths() {
  const news = await getStrapiCollectionTypes('/all-news');

  const paths = news.map((item) => ({
    params: {
      id: item.id.toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}
