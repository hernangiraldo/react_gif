import React from 'react';

import './GifGridItem.scss';

const GifGridItem = ({ title, url }) => {
  return(
    <div className='GifGridItem animate__animated animate__fadeIn'>
      <h3>{ title }</h3>
      <img src={ url } alt={ title }/>
    </div>
  );
}

export default GifGridItem;
