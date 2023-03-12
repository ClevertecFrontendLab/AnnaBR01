import { useLocation, useParams } from 'react-router-dom';
import { ForgotPassArrowIcon } from '../../assets';
import { AuthLayout, SendEmailForm, StatusBlock, ResetPasswordForm } from '../../components';
import { ROUTE } from '../../routes/routes';
import { useAppSelector } from '../../store/hooks';
import { getForgotPasswordInfo } from '../../store/selectors/forgot-password-selector';

import { BackToAuth } from './styles';

export const ForgotPasswordPage = () => {
  const { isSendEmail } = useAppSelector(getForgotPasswordInfo);
  const { search } = useLocation();

  return isSendEmail ? (
    <StatusBlock
      noButton={true}
      title='Письмо выслано'
      message='Перейдите в вашу почту, чтобы воспользоваться подсказками по восстановлению пароля'
    />
  ) : search ? (
    <AuthLayout title='Восстановление пароля'>
      {' '}
      <ResetPasswordForm />
    </AuthLayout>
  ) : (
    <AuthLayout title='Восстановление пароля' paddingTop={96}>
      <BackToAuth to={ROUTE.AUTH}>
        <ForgotPassArrowIcon /> вход в личный кабинет
      </BackToAuth>
      <SendEmailForm />
    </AuthLayout>
  );
};
