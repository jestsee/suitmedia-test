import React, { useState, useEffect } from "react";
import '../../css/styles.css'
import './CommentForm.css'

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

    function colorDecider(error) {
        if (error == null && isSubmit) {
            // green
            return "comment-form-item green"
        } else if (error != null && isSubmit) {
            // red
            return "comment-form-item red"
        }
        return "comment-form-item"
    }

    return (
        <form onSubmit={handleSubmit} className='add-comment-container'>
            <div className="divider">
                <h2 className='font-face-gmb'><span>Tambahkan Komentar</span></h2>
            </div>
            <div className='comment-form-container'>
                <div className={colorDecider(formErrors.name)}>
                    <input className='font-face-gm'
                    type="text"
                    name="name"
                    placeholder='Nama'
                    value={formValues.name}
                    onChange={handleChange}
                    />
                    <p className='font-face-gm'>{formErrors.name}</p>
                </div>
                <div className={colorDecider(formErrors.email)}>
                    <input className='font-face-gm'
                    type="text"
                    name="email"
                    placeholder='Email'
                    value={formValues.email}
                    onChange={handleChange}
                    />
                    <p className='font-face-gm'>{formErrors.email}</p>
                </div>
                <div className={colorDecider(formErrors.comment)}>
                    <textarea
                        type="text" className='font-face-gm'
                        name="comment"
                        placeholder='Komentar anda'
                        value={formValues.comment}
                        onChange={handleChange}
                    />
                    <p className='font-face-gm'>{formErrors.comment}</p>
                </div>
            </div>
            <div className='comment-button-container'>
                <button className='reset-button font-face-gm' onClick={resetForm} type="reset">Reset</button>
                <button className='submit-button font-face-gm' >Submit</button>
            </div>
        </form>
    )
}