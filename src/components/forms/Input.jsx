import React from 'react'
import "./forms.scss";
import { ResponsiveCol } from "../content-wrappers/response-col/ResponsiveCol";

export const Input = ({ label, width, pre }) => {
    return (
        <ResponsiveCol width={width}>
            <div className="wrapper">
                <label htmlFor="">{label}</label>
                <div className="primary input-pre">
                    {pre ? pre() : ""}
                </div>
                <div className={`input-container ${pre ? "no-borderer-pre" : ""}`}>
                    <input className="input-base input-round" type="text" />
                </div>
            </div>
        </ResponsiveCol>
    )
}


