import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

const BreakingBad = () => {

  const { counter, increment, decrement } = useCounter(1);
  const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
  const { author, quote } = !!data && data[0]

  return(
    <>
      <h1>Breaking bad Quotes</h1>
      {
        loading
          ? <p>Loading...</p>
          : (
            <>
              <p><strong>Author:</strong> { author }</p>
              <blockquote>
                { quote }
              </blockquote>
            </>
          )
      }
      { counter >= 2 && <button type='button' onClick={decrement}>Previous</button> }
      <button type='button' onClick={increment}>Next</button>
    </>
  )
}

export default BreakingBad;
