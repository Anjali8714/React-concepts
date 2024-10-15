import React, { useState } from 'react';

function FormValidation() {
  const [formValues, setFormValues] = useState({
    name: '',
    email: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  // Validate form fields
  const validate = () => {
    let errors = {};

    if (!formValues.name) {
      errors.name = "Name is required";
    }

    if (!formValues.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      errors.email = "Email address is invalid";
    }

    return errors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    setFormErrors(errors);
    
    if (Object.keys(errors).length === 0) {
      setIsSubmitted(true);
      console.log('Form data:', formValues);
    }
  };

  return (
    <div>
      {isSubmitted && <h2>Form submitted successfully!</h2>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formValues.name}
            onChange={handleChange}
          />
          {formErrors.name && <p>{formErrors.name}</p>}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
          />
          {formErrors.email && <p>{formErrors.email}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormValidation;
