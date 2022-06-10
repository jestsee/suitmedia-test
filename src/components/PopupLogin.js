import React, { Component, useState } from 'react';
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

    return (
        <>
            <button className='btn-modal' onClick={toggleModal}>
                Open
            </button>

            {modal && (
                <div className='modal'>
                    <div className='overlay' onClick={toggleModal}></div>
                    <div className='modal-content'>
                        <h2>Login</h2>
                        <div className='input-container'>
                            <label>Email</label>
                            <input type="text" name="email" required />
                        </div>
                        <div className='input-container'>
                            <label>Password</label>
                            <input type="password" name="pass" required />
                        </div>
                        
                        <button className='close-modal' onClick={toggleModal}>CLOSE</button>
                        <button>Login</button>
                    </div>
                </div>
            )}

        </>
    )
}