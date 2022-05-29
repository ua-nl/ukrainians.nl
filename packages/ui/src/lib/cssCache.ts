import createCache from '@emotion/cache';

export const cssCache = createCache({
  key: 'css',
  prepend: true,
});
