import { Button, Logo, Message, StyledAuthLayout, StyledStatusBlock, Title } from './styles';

interface IProps {
  gapLg?: number;
  gapSm?: number;
  title: string;
  message: string;
  noButton?: boolean;
  buttonText?: string;
  onClick?: () => void;
}

export const StatusBlock = ({
  title,
  message,
  buttonText,
  onClick,
  gapLg = 147,
  gapSm = 105,
  noButton = false,
}: IProps) => (
  <StyledAuthLayout gapLg={gapLg} gapSm={gapSm} data-test-id='auth'>
    <Logo>Cleverland</Logo>
    <StyledStatusBlock data-test-id='status-block'>
      <Title>{title}</Title>
      <Message>{message}</Message>
      {!noButton && (
        <Button type='button' onClick={onClick}>
          {buttonText}
        </Button>
      )}
    </StyledStatusBlock>
  </StyledAuthLayout>
);
