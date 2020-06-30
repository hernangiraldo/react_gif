import { useEffect, useState } from 'react';
import { getGifList } from '../helpers/getGifList';

export const useFetchGifList = (category) => {

  const [ state, setState ] = useState({
    data: [],
    loading: true
  });

  useEffect( () => {
    getGifList(category)
      .then(list => {
        setState({
          data: list,
          loading: false
        });
      });
  }, [ category ])

  return state;

}
