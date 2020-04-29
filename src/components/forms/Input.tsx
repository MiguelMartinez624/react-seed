import React, { PureComponent } from 'react'
import "./forms.scss";
import { ResponsiveCol } from "../content-wrappers/response-col/ResponsiveCol";

export interface InputProps {
    label?: string,
    width?: number,
    name?: string,
    pre?: any,
    value?: any,
    handleChange?: any

}

export class Input extends PureComponent<InputProps, any> {
    constructor(props: InputProps) {
        super(props)
        this.emitChange = this.emitChange.bind(this);
    }

    public emitChange(event: any): void {
        const { handleChange, name } = this.props
        handleChange(event.target.value, name)
    }

    render() {

        const { width, label, pre, value, name } = this.props;

        return (
            <ResponsiveCol width={width}>
                <label htmlFor="">{label}</label>
                <div className="wrapper">

                    {pre ? <div className="primary input-pre">{pre()}      </div> : ""}

                    <div className={`input-container ${pre ? "no-borderer-pre" : ""}`}>
                        <input name={name} value={value} onChange={this.emitChange} className="input-base input-round" type="text" />
                    </div>
                </div>
            </ResponsiveCol>
        )
    }
}



