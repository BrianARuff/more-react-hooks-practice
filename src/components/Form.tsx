import * as React from "react";
import useForm from "./useForm";

const Form = () => {
  const {
    userNameRef,
    passwordRef,
    handleFormChanges
  } = useForm();

  return (
    <form>
      <label htmlFor="username">Username</label>
      <input id="username" ref={userNameRef} onChange={handleFormChanges} type="text" name="username"/>
      <label htmlFor="password">Password</label>
      <input id="password" ref={passwordRef} onChange={handleFormChanges} type="text" name="password"/>
    </form>
  )
}

export default Form;