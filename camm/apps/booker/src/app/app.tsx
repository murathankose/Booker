import React from 'react';
import { Provider } from 'react-redux';
import { Routes } from './Routes';
import { Navigation } from '@camm/ui';
import { configureStore } from '@camm/config';

const store = configureStore();

export const App = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Navigation/>
      </Routes>
    </Provider>
  );
};

export default App;
