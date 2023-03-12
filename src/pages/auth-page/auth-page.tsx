import { AuthForm, AuthLayout, Loader, StatusBlock } from '../../components';
import { useWindowSize } from '../../hooks/use-window-size';
import { fetchAuthUser } from '../../store/features/user-slice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getUserInfo } from '../../store/selectors/user-selector';
import { Breackpoint } from '../../ui/media';

export const AuthPage = () => {
  const { width = 0 } = useWindowSize();
  const { isLoadingAuthUser, errorAuthMessage, errorAuthStatus, userRequest } = useAppSelector(getUserInfo);
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
      {isLoadingAuthUser &&
        (width < Breackpoint.SM ? <Loader size={42} /> : width < Breackpoint.MD ? <Loader size={64} /> : <Loader />)}
      <AuthForm />
    </AuthLayout>
  );
};
