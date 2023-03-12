import { useLocation, useNavigate } from 'react-router-dom';

import { ForgotPassArrowIcon } from '../../assets';
import { AuthLayout, ResetPasswordForm, SendEmailForm, StatusBlock } from '../../components';
import { ROUTE } from '../../routes/routes';
import { fetchResetPassword } from '../../store/features/forgot-password-slice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getForgotPasswordInfo } from '../../store/selectors/forgot-password-selector';

import { BackToAuth } from './styles';

export const ForgotPasswordPage = () => {
  const { isSendEmail, isResetPassword, errorResetPasswordMessage, dataRequestReset } =
    useAppSelector(getForgotPasswordInfo);
  const { search } = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return isSendEmail || isResetPassword || errorResetPasswordMessage ? (
    isSendEmail ? (
      <StatusBlock
        noButton={true}
        title='Письмо выслано'
        message='Перейдите в вашу почту, чтобы воспользоваться подсказками по восстановлению пароля'
      />
    ) : isResetPassword ? (
      <StatusBlock
        title='Новые данные сохранены'
        message='Зайдите в личный кабинет, используя свои логин и новый пароль'
        buttonText='вход'
        onClick={() => {
          navigate(ROUTE.AUTH);
        }}
      />
    ) : (
      <StatusBlock
        gapSm={125}
        gapLg={159}
        title='Данные не сохранились'
        message='Что-то пошло не так. Попробуйте ещё раз'
        buttonText='повторить'
        onClick={() => {
          dispatch(fetchResetPassword(dataRequestReset));
        }}
      />
    )
  ) : search ? (
    <AuthLayout title='Восстановление пароля'>
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
