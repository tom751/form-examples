import React from 'react';
import { useForm } from 'react-hook-form';

export default function SimpleForm() {
  const { register, errors, handleSubmit } = useForm();
  const login = data => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(login)}>
      <input
        placeholder="username"
        name="username"
        ref={register({ required: true, maxLength: 10 })}
      />
      {errors.username && errors.username.type === 'required' && (
        <p>Username is required</p>
      )}
      {errors.username && errors.username.type === 'maxLength' && (
        <p>Username has max length of 10 characters</p>
      )}
      <input
        placeholder="password"
        type="password"
        name="password"
        ref={register({ required: true })}
      />
      {errors.password && <p>Password is required</p>}
      {/* Optional only need to pass register */}
      <input placeholder="favourite colour" name="favColour" ref={register} />
      <button type="submit">Login</button>
    </form>
  );
}
