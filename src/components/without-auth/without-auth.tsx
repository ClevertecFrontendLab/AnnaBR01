/* eslint-disable no-negated-condition */
import { Navigate, Outlet } from 'react-router-dom';

import { ROUTE } from '../../routes/routes';
import { useAppSelector } from '../../store/hooks';
import { getUserInfo } from '../../store/selectors/user-selector';

export const WithoutAuth = () => {
  const { isAuth } = useAppSelector(getUserInfo);

  return !isAuth ? <Outlet /> : <Navigate to={`${ROUTE.AllBOOKS}`} />;
};
