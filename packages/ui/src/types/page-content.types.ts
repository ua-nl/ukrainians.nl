import { PageContent } from './strapi-content.types';

export type PageProps = {
  data: PageContent[];
};

export type StaticProps<T> = Promise<{ props: T }>;

export type StaticPageProps = StaticProps<PageProps>;
