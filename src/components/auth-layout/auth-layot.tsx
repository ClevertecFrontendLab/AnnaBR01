import { ReactNode } from 'react';

import { useWindowSize } from '../../hooks/use-window-size';
import { useAppSelector } from '../../store/hooks';
import { getForgotPasswordInfo } from '../../store/selectors/forgot-password-selector';
import { getRegistrationUserInfo } from '../../store/selectors/registration-user-selector';
import { getUserInfo } from '../../store/selectors/user-selector';
import { Breackpoint } from '../../ui/media';
import { Loader } from '../loader/loader';

import { Logo, StyledAuthLayout, StyledForm, Title } from './styles';

interface IProps {
  children: ReactNode;
  paddingTop?: number;
  gapLg?: number;
  gapSm?: number;
  title: string;
}

export const AuthLayout = ({ children, gapLg = 46, gapSm = 8, title, paddingTop = 48 }: IProps) => {
  const { isLoadingForgotPassword } = useAppSelector(getForgotPasswordInfo);
  const { isLoadingAuthUser } = useAppSelector(getUserInfo);
  const { isLoadingRegistration } = useAppSelector(getRegistrationUserInfo);
  const { width = 0 } = useWindowSize();

  return (
    <StyledAuthLayout gapLg={gapLg} gapSm={gapSm} data-test-id='auth'>
      {(isLoadingForgotPassword || isLoadingAuthUser || isLoadingRegistration) &&
        (width < Breackpoint.SM ? <Loader size={42} /> : width < Breackpoint.MD ? <Loader size={64} /> : <Loader />)}
      <Logo>Cleverland</Logo>
      <StyledForm paddingTop={paddingTop}>
        <Title>{title}</Title>
        {children}
      </StyledForm>
    </StyledAuthLayout>
  );
};
