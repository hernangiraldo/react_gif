import { useEffect, useRef, useState } from 'react';

export const useFetch = (url) => {

  const isMounted = useRef(true);
  const [ request, setRequest ] = useState({
    loading: true,
    error: null,
    data: undefined
  })

  useEffect(() => {
    return () => {
      isMounted.current = false;
    }
  }, [])

  useEffect( () => {
    setRequest({
      loading: true,
      error: null,
      data: undefined
    });

    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (isMounted.current) {
          setRequest({
            loading: false,
            error: null,
            data
          })
        }
      })
  }, [ url ])

  return request;
}
