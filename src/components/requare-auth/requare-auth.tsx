import { Navigate, Outlet } from 'react-router-dom';

import { ROUTE } from '../../routes/routes';
import { useAppSelector } from '../../store/hooks';
import { getUserInfo } from '../../store/selectors/user-selector';

export const RequareAuth = () => {
  const { isAuth } = useAppSelector(getUserInfo);

  return isAuth ? <Outlet /> : <Navigate to={`${ROUTE.AUTH}`} />;
};
