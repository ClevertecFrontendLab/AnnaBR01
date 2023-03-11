import { AuthForm, Loader } from '../../components';
import { useWindowSize } from '../../hooks/use-window-size';
import { useAppSelector } from '../../store/hooks';
import { getUserInfo } from '../../store/selectors/user-selector';
import { Breackpoint } from '../../ui/media';

export const AuthPage = () => {
  const { isLoadingAuthUser } = useAppSelector(getUserInfo);
  const { width = 0 } = useWindowSize();

  return isLoadingAuthUser ? (
    width < Breackpoint.SM ? (
      <Loader size={42} />
    ) : width < Breackpoint.MD ? (
      <Loader size={64} />
    ) : (
      <Loader />
    )
  ) : (
    <AuthForm />
  );
};
