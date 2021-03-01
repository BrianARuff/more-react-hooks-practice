import * as React from "react";
import useForm from "./useForm";

const Form = () => {
  let userNameRef = useForm().userNameRef;
  let passwordRef = useForm().passwordRef;
  let handleFormChanges = useForm().handleFormChanges;
  return (
    <form>
      <input ref={userNameRef} onChange={handleFormChanges} type="text" name="username"/>
      <input ref={passwordRef} onChange={handleFormChanges} type="text" name="password"/>
    </form>
  )
}

export default Form;