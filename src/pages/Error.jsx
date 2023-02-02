import React from 'react';
import '../styles/Error.css';
import error from '../image/phone-error.svg';

const Error = () => {
    return (
        <div className='error-body'>
            <h1 className='error-body__title'>PAGE NOT FOUND</h1>
            <img className='error-body__image' src={error} alt="error-phone" />
        </div>
    );
};

export default Error;