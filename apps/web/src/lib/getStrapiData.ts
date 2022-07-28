import qs from 'qs';
import {
  News,
  PageContent,
  Pictures,
  StrapiCollectionTypeResponse,
  StrapiPictures,
  StrapiResponse,
  StrapiSingleTypeResponse,
} from 'ui/lib';

import { getImageURl } from './getImageUrl';

export async function getStrapiData<T>(
  url: string,
  urlParams: Record<string, unknown>,
) {
  const queryString = qs.stringify(urlParams);
  const requestUrl = `${process.env.NEXT_PUBLIC_API_URL}/api${url}${
    queryString ? `?${queryString}` : ''
  }`;

  const res = await fetch(requestUrl);

  if (!res.ok) {
    throw new Error(`An error occured please try again`);
  }

  const { data }: StrapiResponse<T> = await res.json();

  return data;
}

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

export async function getStrapiSingleType(
  url: string,
  urlParams: Record<string, unknown> = {},
): Promise<PageContent[]> {
  const data = await getStrapiData<StrapiSingleTypeResponse>(url, {
    populate: {
      body: {
        populate: ['pictures', 'cards', 'cards.pictures'],
      },
    },
    ...urlParams,
  });

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

export async function getStrapiCollectionTypes(
  url: string,
  urlParams: Record<string, unknown> = {},
): Promise<News[]> {
  const data = await getStrapiData<StrapiCollectionTypeResponse[]>(url, {
    populate: ['pictures'],
    ...urlParams,
  });

  return data.map((item) => ({
    ...item.attributes,
    id: item.id,
    pictures: formatPictures(item.attributes.pictures),
    createdAt: formatDate(item.attributes.createdAt),
  }));
}

export async function getStrapiItem(
  url: string,
  urlParams: Record<string, unknown> = {},
): Promise<News> {
  const data = await getStrapiData<StrapiCollectionTypeResponse>(url, {
    populate: ['pictures'],
    ...urlParams,
  });

  return {
    ...data.attributes,
    id: data.id,
    pictures: formatPictures(data.attributes.pictures),
    createdAt: formatDate(data.attributes.createdAt),
  };
}
