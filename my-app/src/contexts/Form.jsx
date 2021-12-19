import React, { useState } from 'react';

export const FormContext = React.createContext();



export const FormProvider = ({ children, onSubmit }) => {
  const [inputs, setInputs] = useState({});
  const [isSubbmiting, setIsSubmitting] = useState(false);

  const setInputsValue = ({ name, value }) => {
    setInputs((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await onSubmit(inputs);
    setIsSubmitting(false);
  };

  return (
    <FormContext.Provider value={{ inputs: { ...inputs }, isSubbmiting, setInputsValue }}>
      <form className="d-flex flex-wrap justify-content-between" onSubmit={handleSubmit}>
        {children}
      </form>
    </FormContext.Provider>
  )
}