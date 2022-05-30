import type { NextApiRequest, NextApiResponse } from 'next';
import { Config, getConfig } from '../../../lib/getConfig';
import { AvailableLangs } from '../../../lib/getConfigL10n';

const LANG_MAP: Record<string, AvailableLangs> = {
  nl: 'nl',
};
const DEF_LANG = 'en';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Config>,
) {
  const argLang = String(req.query.lang).split(',')[0];
  const lang: AvailableLangs = LANG_MAP[argLang] ?? DEF_LANG;
  res.status(200).json(getConfig(lang));
}
