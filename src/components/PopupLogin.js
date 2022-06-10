import React, { useState, useEffect } from 'react';
import './PopupLogin.css';

export default function PopupLogin() {
    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal)
    }

    // non-active scrolling
    if(modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    // initial values
    const initialValues = {email:"", password:""}
    const [formValues, setFormValues] = useState(initialValues)
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)

    // handler
    const handleChange = (e) => {
        const {name, value} = e.target
        setFormValues({...formValues, [name]:value})
        console.log(formValues)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormErrors(validate(formValues))
        setIsSubmit(true)
    }

    useEffect(() => {
        // successfully login
        if(Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    })

    const validate = (value) => {
        const errors = {}
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i

        if(!value.email || !regex.test(value.email)) {
            errors.email = "Format email salah"
        } 
        if(!value.password) {
            errors.password = "Wajib diisi"
        }
        return errors
    }

    return (
        <>
            <button className='btn-modal' onClick={toggleModal}>
                Open
            </button>

            {modal && (
                <div className='modal'>
                    <div className='overlay' onClick={toggleModal}></div>
                    <form className='modal-content' onSubmit={handleSubmit}>
                        {/* <pre>{JSON.stringify(formValues, undefined, 2)}</pre> */}
                        <h2>Login</h2>
                        <div className='input-container'>
                            <label>Email</label>
                            <input type="text" name="email" value={formValues.email} onChange={handleChange}/>
                        </div>
                        <p>{formErrors.email}</p>
                        <div className='input-container'>
                            <label>Password</label>
                            <input type="password" name="password" value={formValues.password} onChange={handleChange}/>
                        </div>
                        <p>{formErrors.password}</p>
                        {/* <button className='close-modal' onClick={toggleModal}>CLOSE</button> */}
                        <button>Login</button>
                    </form>
                </div>
            )}

        </>
    )
}