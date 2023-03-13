import { StyledButtonAuth } from './styles';

interface IProps {
  text: string;
  marginTopLg?: number;
  marginBottom?: number;
  marginTopSm?: number;
  type?: 'submit' | 'button' | 'reset';
  disabled: boolean;
}

export const ButtonAuth = ({
  text,
  marginTopLg = 32,
  marginTopSm = 24,
  marginBottom = 16,
  type = 'submit',
  disabled,
}: IProps) => (
  <StyledButtonAuth
    marginTopLg={marginTopLg}
    marginTopSm={marginTopSm}
    marginBottom={marginBottom}
    type={type}
    disabled={disabled}
  >
    {text}
  </StyledButtonAuth>
);
