import { NoImageIcon } from '../../assets';
import { IBook } from '../../types/types';
import { ButtonOccupied, ButtonOccupiedUntil, PrimaryButton, Stars } from '..';

import {
  Image,
  NoImage,
  StyledHorizontalBookCard,
  Text,
  Title,
  WrapperContent,
  WrapperImage,
  WrapperRow,
  WrapperText,
} from './styles';

interface IProps {
  book: IBook;
}

export const HorizontalBookCard = ({ book }: IProps) => {
  const { image, year, author, title, rating, isBooked, bookedTill } = book;

  return (
    <StyledHorizontalBookCard data-test-id='card'>
      <WrapperImage>
        {image.length === 0 ? (
          <NoImage>
            <NoImageIcon />
          </NoImage>
        ) : (
          <Image src={image[0]} alt={title} />
        )}
      </WrapperImage>

      <WrapperContent>
        <Title>{title}</Title>

        <WrapperText>
          <Text>{author}, </Text>
          <Text>{year}</Text>
        </WrapperText>

        <WrapperRow>
          <Stars rating={rating} gap={6} />

          {isBooked === true && bookedTill === '' && (
            <ButtonOccupied large={174} middle={174} small={186}>
              Забронировано
            </ButtonOccupied>
          )}
          {isBooked === true && bookedTill !== '' && (
            <ButtonOccupiedUntil large={174} middle={174} small={186}>
              Занята до 25.02
            </ButtonOccupiedUntil>
          )}
          {isBooked === false && (
            <PrimaryButton large={174} middle={174} small={186}>
              Забронировать
            </PrimaryButton>
          )}
        </WrapperRow>
      </WrapperContent>
    </StyledHorizontalBookCard>
  );
};
