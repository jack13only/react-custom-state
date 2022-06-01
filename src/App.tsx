import React, { useReducer } from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components';
import { About, Main, NotFound, Forms, CardId } from './pages';
import { PATHS } from './shared/constants/routes';
import { ContextApp, initialState, reducer } from './state/reducer';

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <Header />
      <ContextApp.Provider value={{ state, dispatch }}>
        <Routes>
          <Route path={PATHS.main} element={<Main />} />
          <Route path={PATHS.id} element={<CardId />} />
          <Route path={PATHS.forms} element={<Forms />} />
          <Route path={PATHS.about} element={<About />} />
          <Route path={PATHS.notFound} element={<NotFound />} />
        </Routes>
      </ContextApp.Provider>
    </>
  );
};

export default App;
