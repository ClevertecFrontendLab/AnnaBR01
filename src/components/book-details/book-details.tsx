import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import { NoImageIcon } from '../../assets';
import { useWindowSize } from '../../hooks/use-window-size';
import { useAppSelector } from '../../store/hooks';
import { getBookDetails } from '../../store/selectors/book-details-selector';
import { Breackpoint } from '../../ui/media';
import { Title } from '../../ui/typography';
import { ButtonOccupied, ButtonOccupiedUntil, PrimaryButton, SliderDesktop, SliderTablet } from '..';

import {
  Author,
  Description,
  Image,
  NoImage,
  StyledBookDetails,
  TitleDescription,
  WrapperContent,
  WrapperDekstopDescription,
  WrapperImage,
  WrapperTabletDescription,
  WrapperText,
} from './styles';

export const BookDetails = () => {
  const { width = 0 } = useWindowSize();
  const { book } = useAppSelector(getBookDetails);
  const { images, title, authors, issueYear, booking, delivery } = book;

  return (
    <React.Fragment>
      <StyledBookDetails>
        <WrapperImage>
          {images === null && (
            <NoImage>
              <NoImageIcon />
            </NoImage>
          )}

          {images !== null && images.length === 1 && (
            <Image src={`https://strapi.cleverland.by${images[0].url}`} alt={title} />
          )}

          {images !== null &&
            images.length > 1 &&
            (width >= Breackpoint.MD ? (
              <SliderDesktop image={images} title={title} />
            ) : (
              <SliderTablet image={images} title={title} />
            ))}
        </WrapperImage>

        <WrapperContent>
          <Title data-test-id='book-title'>{title}</Title>

          <Author>
            {authors !== null && authors.map((author) => <WrapperText key={uuidv4()}>{author}, </WrapperText>)}
            {issueYear && <WrapperText>{issueYear}</WrapperText>}
          </Author>

          {booking === null ? (
            <PrimaryButton large={350} middle={306} small={288} padding={14} fontSize={16} isBig={false}>
              Забронировать
            </PrimaryButton>
          ) : booking.order && delivery === null ? (
            <ButtonOccupied large={350} middle={306} small={288} padding={14} fontSize={16} isBig={false}>
              Забронировано
            </ButtonOccupied>
          ) : (
            delivery &&
            booking.order &&
            delivery.handed && (
              <ButtonOccupiedUntil large={350} middle={306} small={288} padding={14} fontSize={16} isBig={false}>
                Занята
              </ButtonOccupiedUntil>
            )
          )}

          {width > Breackpoint.MD && (
            <WrapperDekstopDescription>
              <TitleDescription>О книге</TitleDescription>
              <Description>
                Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство таких задач уже были кем-то
                решены, протестированы и проверены. Можно, конечно, погрузится в глубокую философию гениального Кнута,
                изучить многостраничные фолианты с доказательствами и обоснованиями, но хотите ли вы тратить на это свое
                время? Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы — это просто. А
                грокать алгоритмы — это веселое и увлекательное занятие.
              </Description>
            </WrapperDekstopDescription>
          )}
        </WrapperContent>
      </StyledBookDetails>

      {width < Breackpoint.MD && (
        <WrapperTabletDescription>
          <TitleDescription>О книге</TitleDescription>
          <Description>
            Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство таких задач уже были кем-то
            решены, протестированы и проверены. Можно, конечно, погрузится в глубокую философию гениального Кнута,
            изучить многостраничные фолианты с доказательствами и обоснованиями, но хотите ли вы тратить на это свое
            время? Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы — это просто. А грокать
            алгоритмы — это веселое и увлекательное занятие.
          </Description>
        </WrapperTabletDescription>
      )}
    </React.Fragment>
  );
};
