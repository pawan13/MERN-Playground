import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postStrAction } from "./DisplayAction";

const Form = () => {
  const dispatch = useDispatch();
  const [str, setStr] = useState("");
  const handleOnChange = (e) => {
    const { value } = e.target;
    setStr(value);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    // dispatch(setDisplay(str))
    dispatch(postStrAction(str));
  };
  return (
    <form action="" onSubmit={handleOnSubmit}>
      <input type="text" onChange={handleOnChange} required />
      <button>Submit</button>
    </form>
  );
};

export default Form;
