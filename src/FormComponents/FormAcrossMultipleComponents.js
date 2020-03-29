import React from 'react';
import { useForm } from 'react-hook-form';
import UserDetails from './UserDetails';

export default function FormAcrossMultipleComponents() {
  const { register, errors, handleSubmit } = useForm();
  const onRegister = data => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onRegister)}>
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
      <UserDetails register={register} errors={errors} />
      <button type="submit">Register</button>
    </form>
  );
}
