import { useState } from 'react';

export const useForm = (initialValue = {}) =>  {
  const [ state, setState ] = useState(initialValue);

  const handleInputChange = ({ target }) => {
    setState({
      ...state,
      [target.name]: target.value
    });
  }

  return [ state, handleInputChange ]

}
