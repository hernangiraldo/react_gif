import React, { useLayoutEffect, useRef } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';
import './LayoutEffect.scss';

const LayoutEffect = () => {

  const { counter, increment, decrement } = useCounter(1);
  const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
  const { quote } = !!data && data[0]

  const paragraphRef = useRef();

  useLayoutEffect(() => {
    console.log(paragraphRef.current.getBoundingClientRect())
  }, [ quote ])

  return(
    <>
      <h1>Breaking bad Quotes</h1>
      <blockquote ref={paragraphRef}>
        { quote }
      </blockquote>
      { counter >= 2 && <button type='button' onClick={decrement}>Previous</button> }
      <button type='button' onClick={increment}>Next</button>
    </>
  )
}

export default LayoutEffect;
