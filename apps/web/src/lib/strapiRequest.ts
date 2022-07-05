import { News, PageContent, Pictures } from '../types/strapi-content.types';
import {
  StrapiCollectionTypeResponse,
  StrapiPictures,
  StrapiResponse,
  StrapiSingleTypeResponse,
} from '../types/strapi-response.types';
import { getImageURl } from './getImageUrl';

const formatPictures = (pictures: StrapiPictures): Pictures[] | null => {
  if (pictures?.data) {
    return pictures.data.map((picture) => ({
      url: getImageURl(picture.attributes.url),
      width: picture.attributes.width,
      height: picture.attributes.height,
    }));
  } else {
    return null;
  }
};

const formatDate = (date: string) => {
  const d = new Date(date);
  const month = d.toLocaleString('default', { month: 'long' });

  return `${d.getDate()} ${month} ${d.getFullYear()}`;
};

export async function getStrapiData<T>(url: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api${url}?populate=deep`,
  );
  const { data }: StrapiResponse<T> = await res.json();
  return data;
}

export async function getStrapiSingleType(url: string): Promise<PageContent[]> {
  const data = await getStrapiData<StrapiSingleTypeResponse>(url);

  const pageContent = data.attributes.body.map((section) => {
    const pictures = formatPictures(section.pictures);

    const cards = section.cards.map((card) => ({
      ...card,
      pictures: formatPictures(card.pictures),
    }));

    return {
      ...section,
      cards,
      pictures,
    };
  });

  return pageContent;
}

export async function getStrapiCollectionTypes(url: string): Promise<News[]> {
  const data = await getStrapiData<StrapiCollectionTypeResponse[]>(url);

  return data.map((item) => ({
    ...item.attributes,
    pictures: formatPictures(item.attributes.pictures),
    createdAt: formatDate(item.attributes.createdAt),
  }));
}
