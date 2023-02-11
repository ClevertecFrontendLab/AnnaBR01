import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import { ChevronDownIcon, ChevronUpIcon } from '../../assets';
import reviewerAvatarIcon from '../../assets/images/reviewer-avatar.png';
import { useToggle } from '../../hooks/use-toggle';
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

export interface IReview {
  reviewerName: string;
  reviewerAvatar: string;
  review: string;
  stars: number;
  date: string;
}

const dataReviews: IReview[] | [] = [
  {
    reviewerName: 'Александр Пушкин',
    reviewerAvatar: '',
    review:
      'Учитывая ключевые сценарии поведения, курс на социально-ориентированный национальный проект не оставляет шанса для анализа существующих паттернов поведения. Для современного мира внедрение современных методик предоставляет широкие возможности для позиций, занимаемых участниками в отношении поставленных задач. Как уже неоднократно упомянуто, сделанные на базе интернет-аналитики выводы будут в равной степени предоставлены сами себе. Вот вам яркий пример современных тенденций — глубокий уровень погружения создаёт предпосылки для своевременного выполнения сверхзадачи. И нет сомнений, что акционеры крупнейших компаний, инициированные исключительно синтетически, превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.',
    stars: 3,
    date: '10 марта 1856',
  },
  {
    reviewerName: 'Лев Толстой',
    reviewerAvatar: '',
    review: '',
    stars: 5,
    date: '13 февраля 1921',
  },
  {
    reviewerName: 'Мария Петрова',
    reviewerAvatar: '',
    review: '',
    stars: 5,
    date: '15 апреля 2023',
  },
];

export const ReviewsList = () => {
  const [isOpen, toggleIsOpen] = useToggle(false);
  const toggleRewievs = () => {
    toggleIsOpen();
  };

  return (
    <Wrapper>
      <TitleBox $open={isOpen}>
        <WrapperReviews>
          <SmallTitle>
            Отзывы<ReviewsAmount>{dataReviews.length}</ReviewsAmount>
          </SmallTitle>
          <ButtonArrow type='button' onClick={toggleRewievs} data-test-id='button-hide-reviews'>
            {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </ButtonArrow>
        </WrapperReviews>
      </TitleBox>

      {!!dataReviews.length && isOpen && (
        <React.Fragment>
          <Separator />

          <Content>
            {dataReviews.map(({ reviewerName, review, stars, date }) => (
              <Review key={uuidv4()}>
                <Info>
                  <img src={reviewerAvatarIcon} alt='avatar' />
                  <Box>
                    <InfoText>{reviewerName}</InfoText>
                    <InfoText>{date}</InfoText>
                  </Box>
                </Info>
                <Stars rating={stars} />
                <Text>{review}</Text>
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
