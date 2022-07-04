import { PageContent } from '../types/strapi-data';
import { StrapiPictures, StrapiResponse } from '../types/strapi-response';
import { getImageURl } from './getImageUrl';

export async function getStrapiContent(url: string): Promise<PageContent[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api${url}?populate=deep`,
  );
  const { data }: StrapiResponse = await res.json();

  const formatPictures = (pictures: StrapiPictures) => {
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
