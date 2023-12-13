"use client";
// import {  useFormState } from 'react-hook-form';
// import { experimental_useFormState as useFormState } from "react-dom";
import { useFormState } from 'react-dom'
// import { experimental_useFormState as useFormState } from "react-hook-form";

import { formSubmission } from "./action";

export default function Form() {
    const [state, formAction] = useFormState(formSubmission,{
        error : " ",
        success: false,
    });
    const {error, success}= state;
    console.log({state});
  return (
    <form action={formAction}>
      <fieldset className="mx-auto max-w-xs flex flex-col gap-2">
        <input name="name" placeholder="your name" className="text-black" />
        <input name="email" placeholder="email" className="text-black" />
        {!!error && <p className='text-red-500'>{error}</p>}
        <button>Submit</button>
      </fieldset>
    </form>
  );
}
