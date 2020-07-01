import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import GifExpertHeader from './components/UI/GifExpertHeader/GifExpertHeader';
import AppWrapper from './components/UI/AppWrapper/AppWrapper';
// import Home from './screens/Home/Home';
// import Form from './screens/Form/Form';
import BreakingBad from './screens/BreakingBad/BreakingBad';

ReactDOM.render(
  <React.StrictMode>
    <GifExpertHeader />
    <AppWrapper>
      <BreakingBad />
    </AppWrapper>
  </React.StrictMode>,
  document.getElementById('root')
);
