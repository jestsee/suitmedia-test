import React, { useState, useEffect } from "react";
import "./Modal.css";

export default function Form({ register }) {
  // initial values
  const initialValues = { name: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  // handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    // successfully login
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  });

  const validate = (value) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!value.email || !regex.test(value.email)) {
      errors.email = "Format email salah";
    }
    if (!value.password) {
      errors.password = "Wajib diisi";
    }
    if (!value.name) {
      errors.name = "Wajib diisi";
    }
    return errors;
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* name */}
      <h2>{register ? "Register" : "Login"}</h2>
      {register ? (
        <>
          <div className="input-container">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formValues.name}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.name}</p>
        </>
      ) : null}

      {/* email */}
      <div className="input-container">
        <label>Email</label>
        <input
          type="text"
          name="email"
          value={formValues.email}
          onChange={handleChange}
        />
      </div>
      <p>{formErrors.email}</p>

      {/* password */}
      <div className="input-container">
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formValues.password}
          onChange={handleChange}
        />
      </div>
      <p>{formErrors.password}</p>
      <button>{register ? "Create account" : "Login"}</button>
    </form>
  );
}
