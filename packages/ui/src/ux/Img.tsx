import Image, { ImageProps } from 'next/image';
import { Pictures } from 'ui/types';

import placeholderImg from '../../../../apps/web/public/img/img-placeholder.png';

type Props = {
  picture?: Pictures | null;
} & Omit<ImageProps, 'src'>;

export const Img = ({ picture, ...props }: Props) => {
  return (
    <>
      {picture && (
        <Image
          src={picture.url}
          width={picture.width}
          height={picture.height}
          placeholder="blur"
          blurDataURL={placeholderImg.src}
          {...props}
        />
      )}
    </>
  );
};
