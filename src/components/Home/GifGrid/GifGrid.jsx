import React from 'react';
import PropTypes from 'prop-types';

import './GifGrid.scss';
import GifGridItem from '../GifGridItem/GifGridItem';
import { useFetchGifList } from '../../../hooks/useFetchGifList';

const GifGrid = ({ category }) => {

  const { data: images, loading } = useFetchGifList(category.value);

  return(
    <div className='animate__animated animate__fadeIn'>
      <h2>{ category.value }</h2>

      {
        loading
          ? <p>Loading...</p>
          : (
            <section className='GifGrid__list'>
              {
                images?.length &&
                images.map(gif => <GifGridItem key={gif.id} { ...gif } />)
              }
            </section>
          )
      }
    </div>
  )
}

GifGrid.propTypes = {
  category: PropTypes.object.isRequired
}

export default GifGrid;
