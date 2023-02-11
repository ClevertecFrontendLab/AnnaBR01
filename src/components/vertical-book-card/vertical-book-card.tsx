import { NoImageIcon } from '../../assets';
import { IBook } from '../../types/types';
import { ButtonOccupied, ButtonOccupiedUntil, PrimaryButton, Stars } from '..';

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
  const { image, year, author, title, rating, isBooked, bookedTill } = book;

  return (
    <StyledVerticalBookCard data-test-id='card'>
      <WrapperImage>
        {image.length === 0 ? (
          <NoImage>
            <NoImageIcon />
          </NoImage>
        ) : (
          <Image src={image[0]} alt={title} />
        )}
      </WrapperImage>

      <Stars rating={rating} gap={6} />

      <WrapperTitle>
        <Title>{title}</Title>
      </WrapperTitle>

      <SubTitle>
        <WrapperText>
          <Text>{author}, </Text>
          <Text>{year}</Text>
        </WrapperText>
      </SubTitle>
      {isBooked === true && bookedTill === '' && <ButtonOccupied>Забронировано</ButtonOccupied>}
      {isBooked === true && bookedTill !== '' && <ButtonOccupiedUntil>Занята до 25.02</ButtonOccupiedUntil>}
      {isBooked === false && <PrimaryButton>Забронировать</PrimaryButton>}
    </StyledVerticalBookCard>
  );
};
