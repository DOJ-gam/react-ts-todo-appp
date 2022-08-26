import React from "react";

const InputField = () => {
  return (
    <form className="input">
      <input type="text" className="input__box" placeholder="Enter a todo" />
      <button className="input__submit" type="submit">
        Go
      </button>
    </form>
  );
};

export default InputField;
