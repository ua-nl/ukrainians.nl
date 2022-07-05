export enum Category {
  NEWS = 'news',
  EVENTS = 'events',
  PRESS = 'press',
}

export type StrapiResponse<T> = {
  data: T;
};

export type StrapiSingleTypeResponse = {
  attributes: {
    body: StrapiSection[];
    createdAt: string;
    publishedAt: string;
    updatedAt: string;
  };
  id: number;
};

export type StrapiCollectionTypeResponse = {
  attributes: {
    title: string;
    description: string;
    category: Category;
    pictures: StrapiPictures;
    createdAt: string;
    publishedAt: string;
    updatedAt: string;
  };
  id: number;
};

export type StrapiPictures = {
  data: {
    attributes: StrapiImageAttributes;
    id: number;
  }[];
};

type StrapiSection = {
  cards: StrapiCard[];
  description: string;
  description2: string;
  id: number;
  pictures: StrapiPictures;
  title: string;
};

type StrapiCard = {
  title: string;
  description: string;
  id: number;
  pictures: StrapiPictures;
  category?: Category;
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
