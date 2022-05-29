import { createContext } from "react";

export type AppCtx = {
  lang: string;
  menu: Array<{
    label: string;
    slug: string;
  }>,
  footer: Array<{
    label: string;
    slug: string;
  }>
}
export const appCtx = createContext<null | AppCtx>(null);
