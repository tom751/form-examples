import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { useForm } from 'react-hook-form';

export default function FormWithToggeableExtras() {
  const { register, errors, handleSubmit } = useForm();
  const [needsMoreStuff, setNeedsMoreStuff] = useState(false);
  const onSubmit = data => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="username" name="username" ref={register} />
      <input
        type="checkbox"
        name="moreStuff"
        value={needsMoreStuff}
        onChange={event => setNeedsMoreStuff(event.target.checked)}
      />
      {needsMoreStuff && (
        <>
          <input
            placeholder="first name"
            name="firstname"
            ref={register({ required: true })}
          />
          {errors.firstname && <p>First name is required</p>}
          <input
            placeholder="last name"
            name="lastname"
            ref={register({ required: true })}
          />
          {errors.lastname && <p>Last name is required</p>}
        </>
      )}
      <button type="submit">Submit</button>
    </form>
  );
}
