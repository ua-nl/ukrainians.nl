import { PageContent } from '../types/strapi-data';
import { StrapiResponse } from '../types/strapi-response';
import { getImageURl } from './getImageUrl';

export async function getStrapiContent(url: string): Promise<PageContent[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api${url}?populate=deep`,
  );
  const { data }: StrapiResponse = await res.json();

  const pageContent = data.attributes.body.map((section) => {
    const pictures = section.pictures?.data
      ? section.pictures.data.map((picture) => ({
          url: getImageURl(picture.attributes.url),
          width: picture.attributes.width,
          height: picture.attributes.height,
        }))
      : null;

    const cards = section.cards.map((card) => ({
      ...card,
      pictures: pictures,
    }));

    return {
      ...section,
      cards: cards,
      pictures: pictures,
    };
  });

  return pageContent;
}
