/* eslint-disable react/prop-types */
import React from "react";

function TextInput({ id, label, ...delegated }) {
  let generatedId = React.useId();
  let appliedId = id || generatedId;

  return (
    <>
      <div className=" w-full">
        <label htmlFor={appliedId}>{label}</label>
        <input id={appliedId} {...delegated} className="w-full" />
      </div>
    </>
  );
}

export default TextInput;
