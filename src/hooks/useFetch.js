import { useEffect, useState } from 'react';

export const useFetch = (url) => {

  const [ request, setRequest ] = useState({
    loading: true,
    error: null,
    data: undefined
  })

  useEffect( () => {
    setRequest({
      loading: true,
      error: null,
      data: undefined
    });

    fetch(url)
      .then(response => response.json())
      .then(data => {
        setRequest({
          loading: false,
          error: null,
          data
        })
      })
  }, [ url ])

  return request;
}
