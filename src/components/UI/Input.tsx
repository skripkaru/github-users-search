import React from 'react';

interface InputProps {
  value: string
  placeholder: string
  onChange: (e: any) => void
}

const Input = (props: InputProps) => {
  const {value, placeholder, onChange} = props

  return (
    <input
      className="w-full rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;
