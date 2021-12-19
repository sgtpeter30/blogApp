import React, { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const Input = ({ context, type, name }) => {
  const { setInputsValue } = useContext(context);
  const [value, setValue] = useState('');

  useEffect(
    () => {
      setInputsValue({ type, name, value });
    },
    [value, type],
  )


  return (
    <input className="d-flex" type={type} value={value} onChange={(e) => setValue(e.target.value )} />
  );
};

export default Input;
