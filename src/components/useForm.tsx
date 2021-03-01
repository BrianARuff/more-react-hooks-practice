import * as React from "react";
import {useRef, useState} from "react";

type FORM_STATE = {
  username: string,
  password: string
}

function useForm() {
  const userNameRef = useRef(null)
  const passwordRef = useRef(null)
  const [formData, setFormData] = useState<FORM_STATE>({username: "", password: ""})
  const handleFormChanges = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    setFormData(() => {
      return {
        ...formData,
        [target.name]: target.value
      }
    })
  }

  return {
    userNameRef,
    passwordRef,
    formData,
    handleFormChanges
  }
}

export default useForm;