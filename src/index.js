import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import GifExpertHeader from './components/UI/GifExpertHeader/GifExpertHeader';
import AppWrapper from './components/UI/AppWrapper/AppWrapper';
import Home from './screens/Home/Home';

ReactDOM.render(
  <React.StrictMode>
    <GifExpertHeader />
    <AppWrapper>
      <Home />
    </AppWrapper>
  </React.StrictMode>,
  document.getElementById('root')
);
