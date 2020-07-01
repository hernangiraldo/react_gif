import React from 'react';
import { useForm } from '../../hooks/useForm';

const Form = () => {
  const [ loginForm, handleInputChange ] = useForm({
    name: '',
    email: '',
    password: ''
  });

  const { name, email, password } = loginForm;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginForm);
  }

  return(
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} name='name' onChange={handleInputChange} autoComplete='off' required />
      <input type="text" value={email} name='email' onChange={handleInputChange}autoComplete='off' />
      <input type="password" value={password} name='password' onChange={handleInputChange}/>
      <button type='submit'>Imprimir</button>
    </form>
  );
}

export default Form;
