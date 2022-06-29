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
