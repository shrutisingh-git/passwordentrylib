import { useState } from "react";

const useForm = (initialValues, validate) => {
  const [inputs, setInputs] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitClicked, setIsSubmitClicked] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate(inputs);
    const noErrors = Object.keys(validationErrors).length === 0;
    setErrors(validationErrors);
    setIsSubmitClicked(true);
    if (noErrors) {
      console.log("Authenticated", inputs);
    } else {
      console.log("errors try again", validationErrors);
    }
  };

  const handleInputChange = (event) => {
    event.preventDefault();
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value
    }));
  };

  return {
    handleSubmit,
    handleInputChange,
    inputs,
    errors,
    isSubmitClicked
  };
};

export default useForm;
