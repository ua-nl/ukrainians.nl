export type StrapiResponse = {
  data: {
    attributes: {
      body: StrapiSection[];
      createdAt: string;
      publishedAt: string;
      updatedAt: string;
    };
    id: number;
  };
};

type StrapiSection = {
  cards: StrapiCard[];
  description: string;
  id: number;
  pictures: StrapiPictures;
  title: string;
};

type StrapiCard = {
  title: string;
  description: string;
  id: number;
  pictures: StrapiPictures;
};

type StrapiPictures = {
  data: {
    attributes: StrapiImageAttributes;
    id: number;
  }[];
};

type StrapiImageAttributes = {
  alternativeText: string;
  caption: string;
  createdAt: string;
  formats: {
    thumbnail: StrapiImageFormat;
    medium: StrapiImageFormat;
    small: StrapiImageFormat;
  };
  previewUrl: string;
  provider: string;
  provider_metadata: string;
  updatedAt: string;
} & StrapiImageFormat;

type StrapiImageFormat = {
  ext: string;
  hash: string;
  height: number;
  mime: string;
  name: string;
  path?: string;
  size: number;
  url: string;
  width: number;
};
