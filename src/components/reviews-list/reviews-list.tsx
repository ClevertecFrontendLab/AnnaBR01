import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import { ChevronDownIcon, ChevronUpIcon } from '../../assets';
import reviewerAvatarIcon from '../../assets/images/reviewer-avatar.png';
import { useToggle } from '../../hooks/use-toggle';
import { useAppSelector } from '../../store/hooks';
import { getBookDetails } from '../../store/selectors/book-details-selector';
import { SmallTitle } from '../../ui/typography';
import { PrimaryButton } from '../primary-button/primary-button';
import { Stars } from '../stars/stars';
import { Separator } from '..';

import {
  Box,
  ButtonArrow,
  Content,
  Info,
  InfoText,
  Review,
  ReviewsAmount,
  Text,
  TitleBox,
  Wrapper,
  WrapperReviews,
} from './styles';

export const ReviewsList = () => {
  const { book } = useAppSelector(getBookDetails);
  const { comments } = book;

  const [isOpen, toggleIsOpen] = useToggle(false);
  const toggleRewievs = () => {
    toggleIsOpen();
  };

  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return (
    <Wrapper>
      <TitleBox $open={isOpen}>
        <WrapperReviews>
          <SmallTitle>
            Отзывы{comments ? <ReviewsAmount>{comments.length}</ReviewsAmount> : <ReviewsAmount>0</ReviewsAmount>}
          </SmallTitle>
          {comments && (
            <ButtonArrow type='button' onClick={toggleRewievs} data-test-id='button-hide-reviews'>
              {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </ButtonArrow>
          )}
        </WrapperReviews>
      </TitleBox>

      {comments && isOpen && (
        <React.Fragment>
          <Separator />

          <Content>
            {comments.map(({ user, text, rating, createdAt }) => (
              <Review key={uuidv4()}>
                <Info>
                  {user.avatarUrl ? (
                    <img src={`https://strapi.cleverland.by${user.avatarUrl}`} alt='avatar' />
                  ) : (
                    <img src={reviewerAvatarIcon} alt='avatar' />
                  )}
                  <Box>
                    <InfoText>{`${user.firstName}, ${user.lastName}`}</InfoText>
                    <InfoText>
                      {new Date(createdAt).toLocaleDateString('ru-RU', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </InfoText>
                  </Box>
                </Info>
                <Stars rating={rating} />
                <Text>{text}</Text>
              </Review>
            ))}
          </Content>
        </React.Fragment>
      )}

      <PrimaryButton large={350} padding={14} fontSize={16} isBig={true}>
        Оценить книгу
      </PrimaryButton>
    </Wrapper>
  );
};
