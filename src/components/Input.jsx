import React from 'react';

const Input = ({ placeholder }) => {
  return (
    <input
      className="w-full border appearance-none border-lightBlue rounded py-2 px-4"
      type="text"
      placeholder={placeholder}
    />
  );
};

export default Input;
