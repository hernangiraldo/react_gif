import React from 'react';
import PropTypes from 'prop-types';

import './GifGridItem.scss';

const GifGridItem = ({ title, url }) => {
  return(
    <div className='GifGridItem animate__animated animate__fadeIn'>
      <h3>{ title }</h3>
      <img src={ url } alt={ title }/>
    </div>
  );
}

GifGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

export default GifGridItem;
