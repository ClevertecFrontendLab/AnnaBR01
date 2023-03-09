import { useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { NoImageIcon } from '../../assets';
import { useAppSelector } from '../../store/hooks';
import { getBooks } from '../../store/selectors/books-selectors';
import { IBook } from '../../types/types';
import { ButtonOccupied, ButtonOccupiedUntil, Hightlight, PrimaryButton, Stars } from '..';

import {
  Image,
  NoImage,
  StyledVerticalBookCard,
  SubTitle,
  Text,
  Title,
  WrapperImage,
  WrapperText,
  WrapperTitle,
} from './styles';

interface IProps {
  book: IBook;
}

export const VerticalBookCard = ({ book }: IProps) => {
  const { image, issueYear, authors, title, rating, booking, delivery } = book;
  const { searchValue } = useAppSelector(getBooks);

  const light = useCallback((str: string) => <Hightlight filter={searchValue} str={str} />, [searchValue]);

  return (
    <StyledVerticalBookCard data-test-id='card'>
      <WrapperImage>
        {image === null ? (
          <NoImage>
            <NoImageIcon />
          </NoImage>
        ) : (
          <Image src={`https://strapi.cleverland.by${image.url}`} alt={title} />
        )}
      </WrapperImage>

      <Stars rating={rating} gap={6} />

      <WrapperTitle>
        <Title>{light(title)}</Title>
      </WrapperTitle>

      <SubTitle>
        <WrapperText>
          {authors !== null && authors.map((author) => <Text key={uuidv4()}>{author}, </Text>)}
          {issueYear && <Text>{issueYear}</Text>}
        </WrapperText>
      </SubTitle>

      {booking === null ? (
        <PrimaryButton>Забронировать</PrimaryButton>
      ) : booking.order && delivery === null ? (
        <ButtonOccupied>Забронировано</ButtonOccupied>
      ) : (
        delivery && booking.order && delivery.handed && <ButtonOccupiedUntil>Занята</ButtonOccupiedUntil>
      )}
    </StyledVerticalBookCard>
  ); // TODO: add "Занята до"
};
