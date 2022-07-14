import { Typography } from '@mui/material';
import { styled } from '@mui/system';
import Image from 'next/image';
import Link from 'next/link';

import { UASysStyleParts } from '../lib/theme/cssVars/uiElements';
import { News } from '../types';
import { Para2, Subtitle } from './Typography';

const CardContainer = styled('div')(({ theme }) => ({
  borderRadius: UASysStyleParts.boxRadius.borderRadius,
  boxShadow: UASysStyleParts.shadow.boxShadow,
  display: 'flex',
  flexDirection: 'column',
  maxWidth: 370,
  paddingBottom: theme.spacing(5),
  height: 505,
  cursor: 'pointer',

  [theme.breakpoints.only('xs')]: {
    maxWidth: '100%',
  },
}));

const CardImageContainer = styled('div')(({ theme }) => ({
  width: '100%',
  height: 225,
  objectFit: 'cover',
  aspectRatio: '16/9',
  position: 'relative',

  [theme.breakpoints.only('xs')]: {
    height: 'auto',
  },
}));

const CardImage = styled(Image)({
  borderTopRightRadius: UASysStyleParts.boxRadius.borderRadius,
  borderTopLeftRadius: UASysStyleParts.boxRadius.borderRadius,
});

const CardContent = styled('div')(({ theme }) => ({
  padding: theme.spacing(5),
  display: 'flex',
  flexDirection: 'column',
}));

const Description = styled(Typography)({
  display: '-webkit-box',
  textOverflow: 'ellipsis',
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  WebkitLineClamp: 4,
  lineClamp: 4,
  height: 'calc(22px * 4)',
  lineHeight: '22px',
});

type CardItemProps = {
  news: News;
};

export const CardItem = ({ news }: CardItemProps) => (
  <Link href={`/latest-news/${news.id}`}>
    <CardContainer>
      <CardImageContainer>
        {news.pictures && (
          <CardImage
            src={news.pictures[0].url}
            alt={news.title}
            layout="fill"
            objectFit="cover"
          />
        )}
      </CardImageContainer>
      <CardContent>
        <Para2 mb={4}>{news.createdAt}</Para2>
        <Subtitle mb={3}>{news.title}</Subtitle>
        <Description>{news.description}</Description>
      </CardContent>
    </CardContainer>
  </Link>
);
