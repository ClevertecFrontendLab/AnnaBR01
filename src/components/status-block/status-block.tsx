import { Button, Logo, Message, StyledAuthLayout, StyledStatusBlock, Title } from './styles';

interface IProps {
  gapLg?: number;
  gapSm?: number;
  title: string;
  message: string;
  buttonText: string;
  onClick: () => void;
}

export const StatusBlock = ({ title, message, buttonText, onClick, gapLg = 147, gapSm = 105 }: IProps) => (
  <StyledAuthLayout gapLg={gapLg} gapSm={gapSm} data-test-id='auth'>
    <Logo>Cleverland</Logo>
    <StyledStatusBlock data-test-id='status-block'>
      <Title>{title}</Title>
      <Message>{message}</Message>
      <Button type='button' onClick={onClick}>
        {buttonText}
      </Button>
    </StyledStatusBlock>
  </StyledAuthLayout>
);
