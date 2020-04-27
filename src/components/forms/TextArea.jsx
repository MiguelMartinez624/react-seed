import React from 'react'
import "./forms.scss";

export const TextArea = ({ label }) => {
    return (
        <div className="wrapper">
            <label htmlFor="">{label}</label>
            <div className="input-container ">

            <textarea rows="4" className="input-base-textarea  input-round" type="text" />
            </div>
        </div>
    )
}
