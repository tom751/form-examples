import React from 'react';

export default function UserDetails({ register, errors }) {
  return (
    <>
      <input
        placeholder="Full name"
        name="fullname"
        ref={register({ required: true })}
      />
      {errors.username && errors.fullname.type === 'required' && (
        <p>Full name is required</p>
      )}
      <textarea
        placeholder="Address"
        name="address"
        ref={register({ required: true })}
      />
      {errors.address && <p>Address is required</p>}
      <textarea placeholder="Bio" name="bio" ref={register} />
    </>
  );
}
