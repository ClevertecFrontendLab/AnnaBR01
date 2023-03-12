import { AuthForm, AuthLayout, StatusBlock } from '../../components';
import { fetchAuthUser } from '../../store/features/user-slice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getUserInfo } from '../../store/selectors/user-selector';

export const AuthPage = () => {
  const { errorAuthMessage, errorAuthStatus, userRequest } = useAppSelector(getUserInfo);
  const dispatch = useAppDispatch();

  return errorAuthMessage && errorAuthStatus !== 400 ? (
    <StatusBlock
      gapLg={159}
      gapSm={125}
      title='Вход не выполнен'
      message='Что-то пошло не так. Попробуйте ещё раз'
      buttonText='повторить'
      onClick={() => {
        dispatch(fetchAuthUser(userRequest));
      }}
    />
  ) : (
    <AuthLayout title='Вход в личный кабинет'>
      <AuthForm />
    </AuthLayout>
  );
};
