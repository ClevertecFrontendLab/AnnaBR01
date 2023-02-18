import { v4 as uuidv4 } from 'uuid';

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
  const { image, issueYear, authors, title, rating, booking, delivery } = book;

  return (
    <StyledHorizontalBookCard data-test-id='card'>
      <WrapperImage>
        {image === null ? (
          <NoImage>
            <NoImageIcon />
          </NoImage>
        ) : (
          <Image src={`https://strapi.cleverland.by${image.url}`} alt={title} />
        )}
      </WrapperImage>

      <WrapperContent>
        <Title>{title}</Title>

        <WrapperText>
          {authors !== null && authors.map((author) => <Text key={uuidv4()}>{author}, </Text>)}
          {issueYear && <Text>{issueYear}</Text>}
        </WrapperText>

        <WrapperRow>
          <Stars rating={rating} gap={6} />

          {booking === null ? (
            <PrimaryButton large={174} middle={174} small={186}>
              Забронировать
            </PrimaryButton>
          ) : booking.order && delivery === null ? (
            <ButtonOccupied large={174} middle={174} small={186}>
              Забронировано
            </ButtonOccupied>
          ) : (
            delivery &&
            booking.order &&
            delivery.handed && (
              <ButtonOccupiedUntil large={174} middle={174} small={186}>
                Занята
              </ButtonOccupiedUntil>
            )
          )}
        </WrapperRow>
      </WrapperContent>
    </StyledHorizontalBookCard>
  );
};
