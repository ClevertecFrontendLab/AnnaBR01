import { Loader, RegistrationForm } from '../../components';
import { useWindowSize } from '../../hooks/use-window-size';
import { useAppSelector } from '../../store/hooks';
import { getRegistrationUserInfo } from '../../store/selectors/registration-user-selector';
import { Breackpoint } from '../../ui/media';

export const RegistrationPage = () => {
  const { width = 0 } = useWindowSize();
  const { isLoadingRegistration } = useAppSelector(getRegistrationUserInfo);

  return isLoadingRegistration ? (
    width < Breackpoint.SM ? (
      <Loader size={42} />
    ) : width < Breackpoint.MD ? (
      <Loader size={64} />
    ) : (
      <Loader />
    )
  ) : (
    <RegistrationForm />
  );
};
