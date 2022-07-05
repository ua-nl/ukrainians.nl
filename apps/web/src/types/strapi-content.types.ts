import { Category } from './strapi-response.types';

export type PageContent = {
  cards: Card[];
  description: string;
  description2: string;
  id: number;
  pictures: Pictures[] | null;
  title: string;
};

export type Pictures = {
  url: string;
  width: number;
  height: number;
};

export type Card = {
  title: string;
  description: string;
  id: number;
  pictures: Pictures[] | null;
  category?: Category;
};

export type News = {
  title: string;
  description: string;
  category: Category;
  pictures: Pictures[] | null;
  createdAt: string;
  publishedAt: string;
  updatedAt: string;
};
