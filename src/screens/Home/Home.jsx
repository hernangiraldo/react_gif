import React, { useState } from 'react';
import AddCategory from '../../components/UI/AddCategory/AddCategory';
import EmptyData from '../../components/UI/EmptyData/EmptyData';
import GifGrid from '../../components/Home/GifGrid/GifGrid';

const Home = () => {

  const [ categories, setCategories ] = useState([]);

  return(
    <>
      <AddCategory setCategories={ setCategories } />
      {
        categories.length
          ? categories.map(category => <GifGrid key={category.key} category={category} />)
          : <EmptyData />
      }
    </>
  );
}

export default Home;
