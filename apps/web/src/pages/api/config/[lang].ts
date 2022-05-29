import type { NextApiRequest, NextApiResponse } from 'next';
import layoutEn from './__mock__/layout.en.json';
import layoutNl from './__mock__/layout.nl.json';

const LANG_MAP = {
  en: layoutEn,
  nl: layoutNl,
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<typeof layoutEn>,
) {
  const lang = (req.query.lang ?? 'en') as keyof typeof LANG_MAP;
  res.status(200).json(LANG_MAP[lang]);
}
