import { Category } from './strapi-response.types';

export type PageContent = {
  cards: Card[];
  description: string;
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
};

export type News = {
  id: number;
  title: string;
  shortDescription: string;
  longDescription: string;
  category: Category;
  pictures: Pictures[] | null;
  createdAt: string;
  publishedAt: string;
  updatedAt: string;
};
