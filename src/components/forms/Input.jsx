import React from 'react'
import "./forms.scss";
export const Input = ({ label }) => {
    return (
        <div className="wrapper">
            <label htmlFor="">{label}</label>
            <div className="input-container ">

            <input className="input-base input-round" type="text" />
            </div>
        </div>
    )
}
