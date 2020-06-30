import React from 'react';
import PropTypes from 'prop-types';

import './EmptyData.scss';

const EmptyData = ({ message }) => {
 return(
   <p className='EmptyData'>{ message }</p>
 )
}

EmptyData.propTypes = {
  message: PropTypes.string
}

EmptyData.defaultProps = {
  message: `There isn't data to show`
}

export default EmptyData;
