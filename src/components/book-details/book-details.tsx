import React from 'react';
import { useParams } from 'react-router-dom';

import { NoImageIcon } from '../../assets';
import books from '../../books.json';
import { useWindowSize } from '../../hooks/use-window-size';
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
  const { image, title, author, year, isBooked, bookedTill } = books.business[2]; // TODO: change book rendering according to the request
  const { id } = useParams();

  // TODO: change rendering according length of array

  return (
    <React.Fragment>
      <StyledBookDetails>
        <WrapperImage>
          {id === '63ca7627f79ebdac69926ffc' && (
            <NoImage>
              <NoImageIcon />
            </NoImage>
          )}

          {id === '63ca7627549c20ea76acb8fc' && <Image src={image[0]} alt={title} />}

          {id !== '63ca7627549c20ea76acb8fc' &&
            id !== '63ca7627f79ebdac69926ffc' &&
            (width >= Breackpoint.MD ? (
              <SliderDesktop image={image} title={title} />
            ) : (
              <SliderTablet image={image} title={title} />
            ))}
        </WrapperImage>

        <WrapperContent>
          <Title>{title}</Title>

          <Author>
            <WrapperText>{author}, </WrapperText>
            <WrapperText>{year}</WrapperText>
          </Author>

          {isBooked === true && bookedTill === '' && (
            <ButtonOccupied large={350} middle={306} small={288} padding={14} fontSize={16} isBig={true}>
              Забронировано
            </ButtonOccupied>
          )}
          {isBooked === true && bookedTill !== '' && (
            <ButtonOccupiedUntil large={350} middle={306} small={288} padding={14} fontSize={16} isBig={true}>
              Занята до 25.02
            </ButtonOccupiedUntil>
          )}
          {isBooked === false && (
            <PrimaryButton large={350} middle={306} small={288} padding={14} fontSize={16} isBig={true}>
              Забронировать
            </PrimaryButton>
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
