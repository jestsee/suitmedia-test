import React, { useState, useEffect } from "react";
import "./Modal.css";
import "./Comment/CommentForm.css"

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
    // console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    // successfully login
    if (isSubmit && 
      (Object.keys(formErrors).length === 0 ||
      !register && Object.keys(formErrors).length === 1 && Object.keys(formErrors)[0] === "name")) {
      window.location.reload()
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

  function colorDecider(error) {
    if (error == null && isSubmit) {
      return "input-container green"
    } else if (error != null && isSubmit) {
      return "input-container red"
    }
    return "input-container"
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* name */}
      <h2>{register ? "Register" : "Login"}</h2>
      {register ? (
        <>
          <div className={colorDecider(formErrors.name)}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formValues.name}
              onChange={handleChange}
            />
            <p>{formErrors.name}</p>
          </div>
        </>
      ) : null}

      {/* email */}
      <div className={colorDecider(formErrors.email)}>
        <label>Email</label>
        <input
          type="text"
          name="email"
          value={formValues.email}
          onChange={handleChange}
        />
        <p>{formErrors.email}</p>
      </div>

      {/* password */}
      <div className={colorDecider(formErrors.password)}>
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formValues.password}
          onChange={handleChange}
        />
        <p>{formErrors.password}</p>
      </div>
      <button className="submit-button">{register ? "Create account" : "Login"}</button>
    </form>
  );
}
