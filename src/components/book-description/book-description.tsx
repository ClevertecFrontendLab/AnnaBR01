import { v4 as uuidv4 } from 'uuid';

import { useAppSelector } from '../../store/hooks';
import { getBookDetails } from '../../store/selectors/book-details-selector';
import { SecondarySmallTitle } from '../../ui/typography';
import { NoRating, ReviewsList, Separator, Stars } from '..';

import {
  Description,
  DescriptionContainer,
  DescriptionRow,
  Info,
  InfoTitle,
  NoRatingRow,
  NumberRating,
  Rating,
  RatingRow,
  RatingText,
  StyledBookDescription,
  WrapperDescription,
} from './styles';

export const BookDescription = () => {
  const { book } = useAppSelector(getBookDetails);
  const { rating, publish, issueYear, pages, cover, format, categories, weight, ISBN, producer } = book;

  return (
    <StyledBookDescription>
      <Rating>
        <SecondarySmallTitle>Рейтинг</SecondarySmallTitle>

        <Separator />

        {rating === null ? (
          <NoRatingRow>
            <NoRating />
            <RatingText>еще нет оценок</RatingText>
          </NoRatingRow>
        ) : (
          <RatingRow>
            <Stars rating={rating} />
            <NumberRating>{rating}</NumberRating>
          </RatingRow>
        )}
      </Rating>

      <Description>
        <SecondarySmallTitle>Подробная информация</SecondarySmallTitle>

        <Separator />
        <WrapperDescription>
          <DescriptionContainer>
            <DescriptionRow>
              <InfoTitle>Издательство</InfoTitle>
              {publish ? <Info>{publish}</Info> : <Info>нет сведений</Info>}
            </DescriptionRow>

            <DescriptionRow>
              <InfoTitle>Год издания</InfoTitle>
              {issueYear ? <Info>{issueYear}</Info> : <Info>нет сведений</Info>}
            </DescriptionRow>

            <DescriptionRow>
              <InfoTitle>Страниц</InfoTitle>
              {pages ? <Info>{pages}</Info> : <Info>нет сведений</Info>}
            </DescriptionRow>

            <DescriptionRow>
              <InfoTitle>Переплет</InfoTitle>
              {cover ? <Info>{cover}</Info> : <Info>нет сведений</Info>}
            </DescriptionRow>

            <DescriptionRow>
              <InfoTitle>Формат</InfoTitle>
              {format ? <Info>{format}</Info> : <Info>нет сведений</Info>}
            </DescriptionRow>
          </DescriptionContainer>

          <DescriptionContainer>
            <DescriptionRow>
              <InfoTitle>Жанр</InfoTitle>

              {categories !== null &&
                (categories.length > 1 ? (
                  categories.map((categoryName) => <Info key={uuidv4()}>{categoryName}, </Info>)
                ) : (
                  <Info>{categories[0]}</Info>
                ))}

              {categories === null && <Info>нет сведений</Info>}
            </DescriptionRow>

            <DescriptionRow>
              <InfoTitle>Вес</InfoTitle>
              {weight ? <Info>{weight}</Info> : <Info>нет сведений</Info>}
            </DescriptionRow>

            <DescriptionRow>
              <InfoTitle>ISBN</InfoTitle>
              {ISBN ? <Info>{ISBN}</Info> : <Info>нет сведений</Info>}
            </DescriptionRow>

            <DescriptionRow>
              <InfoTitle>Изготовитель</InfoTitle>
              {producer ? <Info>{producer}</Info> : <Info>нет сведений</Info>}
            </DescriptionRow>
          </DescriptionContainer>
        </WrapperDescription>
      </Description>

      <ReviewsList />
    </StyledBookDescription>
  );
};
