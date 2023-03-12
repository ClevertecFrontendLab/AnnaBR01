import { useNavigate } from 'react-router-dom';

import { AuthLayout, Loader, RegistrationForm, StatusBlock } from '../../components';
import { useWindowSize } from '../../hooks/use-window-size';
import { ROUTE } from '../../routes/routes';
import { clearRegistration, fetchRegistrationUser } from '../../store/features/registration-user-slice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getRegistrationUserInfo } from '../../store/selectors/registration-user-selector';
import { Breackpoint } from '../../ui/media';

export const RegistrationPage = () => {
  const dispatch = useAppDispatch();
  const { isLoadingRegistration, user, isRegistration, errorRegistrationMessage, errorRegistrationStatus } =
    useAppSelector(getRegistrationUserInfo);
  const { width = 0 } = useWindowSize();
  const navigate = useNavigate();

  return isRegistration ? (
    <StatusBlock
      title='Регистрация успешна'
      message='Регистрация прошла успешно. Зайдите в личный кабинет, используя свои логин и пароль'
      buttonText='вход'
      onClick={() => {
        navigate(ROUTE.AUTH);
      }}
    />
  ) : errorRegistrationMessage ? (
    errorRegistrationStatus && errorRegistrationStatus === 400 ? (
      <StatusBlock
        gapLg={135}
        title='Данные не сохранились'
        message='Такой логин или e-mail уже записан в системе. Попробуйте зарегистрироваться по другому логину или e-mail'
        buttonText='назад к регистрации'
        onClick={() => {
          dispatch(clearRegistration());
        }}
      />
    ) : (
      <StatusBlock
        gapSm={115}
        title='Данные не сохранились'
        message='Что-то пошло не так и ваша регистрация не завершилась. Попробуйте ещё раз'
        buttonText='повторить'
        onClick={() => {
          dispatch(fetchRegistrationUser(user));
        }}
      />
    )
  ) : (
    <AuthLayout title='Регистрация'>
      {isLoadingRegistration &&
        (width < Breackpoint.SM ? <Loader size={42} /> : width < Breackpoint.MD ? <Loader size={64} /> : <Loader />)}
      <RegistrationForm />
    </AuthLayout>
  );
};
