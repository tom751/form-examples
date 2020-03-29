import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function FormWithCustomInputs() {
  const { register, errors, handleSubmit, control } = useForm();
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
      <Controller
        as={DatePicker}
        name="dob"
        control={control}
        valueName="selected" // this prop is important if the custom component doesn't assign the value to a property called "value"
        onChange={([date]) => date}
        rules={{ required: { value: true, message: 'DOB is required' } }}
      />
      {errors?.dob && <p>{errors.dob.message}</p>}
      <button type="submit">Register</button>
    </form>
  );
}
