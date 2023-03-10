import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter, Route, Routes } from 'react-router-dom';

import { BookPage } from './pages/book';
import { ContractPage } from './pages/contract/contract';
import { ROUTE } from './routes/routes';
import { store } from './store/store';
import { GlobalStyle } from './ui/global-styles';
import { MainTemplate, RequareAuth, SecondTemplate, WithoutAuth } from './components';
import { AuthPage, ForgotPasswordPage, MainPage, RegistrationPage } from './pages';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <HashRouter>
        <Routes>
          <Route element={<RequareAuth />}>
            <Route path={ROUTE.HOME} element={<MainTemplate />}>
              <Route path={ROUTE.HOME} element={<SecondTemplate />}>
                <Route index={true} element={<MainPage />} />
                <Route path={ROUTE.CATEGORY} element={<MainPage />} />

                <Route path={ROUTE.OFFER} element={<ContractPage content='offer' />} />
                <Route path={ROUTE.RULES} element={<ContractPage content='rules' />} />
              </Route>
              <Route path={`${ROUTE.CATEGORY}/:id`} element={<BookPage />} />
            </Route>
          </Route>

          <Route element={<WithoutAuth />}>
            <Route path={ROUTE.REGISTRATION} element={<RegistrationPage />} />
            <Route path={ROUTE.AUTH} element={<AuthPage />} />
            <Route path={ROUTE.FORGOT_PASS} element={<ForgotPasswordPage />} />
          </Route>
        </Routes>
      </HashRouter>
    </Provider>
  </React.StrictMode>
);
