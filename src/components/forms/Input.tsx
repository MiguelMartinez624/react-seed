import { FC } from 'react'
import "./forms.scss";
import { ResponsiveCol } from "../content-wrappers/response-col/ResponsiveCol";

export interface InputProps { label?: string, width?: number, pre?: any }

export const Input: FC<InputProps> = ({ label, width, pre }) => {
    return (
        <ResponsiveCol width={width}>
            <label htmlFor="">{label}</label>
            <div className="wrapper">

                {pre ? <div className="primary input-pre">{pre()}      </div> : ""}

                <div className={`input-container ${pre ? "no-borderer-pre" : ""}`}>
                    <input className="input-base input-round" type="text" />
                </div>
            </div>
        </ResponsiveCol>
    )
}


