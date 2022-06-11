import React, { useState, useEffect } from "react";
import '../../css/styles.css'

export default function CommentForm() {
    const initialValues = { name: "", email: "", comment: "" };
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

    // track each field values
    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues)
            window.location.reload()
        }
    });

    const validate = (value) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    
        if (!value.email || !regex.test(value.email)) {
          errors.email = "Format email salah";
        }
        if (!value.comment) {
          errors.comment = "Wajib diisi";
        }
        if (!value.name) {
          errors.name = "Wajib diisi";
        }
        return errors;
    };

    const resetForm = () => {
        setFormValues(initialValues)
    }

    return (
        <form onSubmit={handleSubmit} className='add-comment-container'>
            <div className='header'>
                <h2>Tambahkan komentar</h2>
                <hr className='solid'></hr>
            </div>
            <div className='comment-form-container'>
                <div className='comment-form-item'>
                    <input
                    type="text"
                    name="name"
                    placeholder='Nama'
                    value={formValues.name}
                    onChange={handleChange}
                    />
                    <p>{formErrors.name}</p>
                </div>
                <div className='comment-form-item'>
                    <input
                    type="text"
                    name="email"
                    placeholder='Email'
                    value={formValues.email}
                    onChange={handleChange}
                    />
                    <p>{formErrors.email}</p>
                </div>
                <div className='comment-form-item'>
                    <input
                    type="text"
                    name="comment"
                    placeholder='Komentar anda'
                    value={formValues.comment}
                    onChange={handleChange}
                    />
                    <p>{formErrors.comment}</p>
                </div>
            </div>
            <div className='comment-button-container'>
                <button className='reset-button' onClick={resetForm} type="reset">Reset</button>
                <button className='submit-button' >Submit</button>
            </div>
        </form>
    )
}