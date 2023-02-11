import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';

import { ViewContextProvider } from './context/button-view-context/button-view-context';
import { BookPage } from './pages/book';
import { ContractPage } from './pages/contract/contract';
import { ROUTE } from './routes/routes';
import { GlobalStyle } from './ui/global-styles';
import { MainTemplate, SecondTemplate } from './components';
import { MainPage } from './pages';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <ViewContextProvider>
      <GlobalStyle />
      <HashRouter>
        <Routes>
          <Route path={ROUTE.HOME} element={<MainTemplate />}>
            <Route path={`${ROUTE.DETAILS}:id`} element={<BookPage />} />
            <Route path={ROUTE.HOME} element={<SecondTemplate />}>
              <Route index={true} element={<MainPage />} />
              <Route path={ROUTE.CATEGORY} element={<MainPage />} />
              <Route path={ROUTE.BOOKS} element={<MainPage />} />
              <Route path={ROUTE.OFFER} element={<ContractPage content='offer' />} />
              <Route path={ROUTE.RULES} element={<ContractPage content='rules' />} />
            </Route>
          </Route>
        </Routes>
      </HashRouter>
    </ViewContextProvider>
  </React.StrictMode>
);
