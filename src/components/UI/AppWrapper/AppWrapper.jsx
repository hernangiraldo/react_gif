import React from 'react';
import './AppWrapper.css';

const AppWrapper = (props) => {
  return(
    <main className='AppWrapper'>
      { props.children }
    </main>
  );
}

export default AppWrapper;


