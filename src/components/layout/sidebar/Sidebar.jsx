import React, { Component } from 'react'
import {OptionItem} from "./option-item/OptionItem"

export class Sidebar extends Component {
    

    render() {
        const { options } = this.props
        return (
            <div className="col-12-m h-12-m">
                {options.map((option, i) => <OptionItem key={i} option={option}></OptionItem> )}
            </div>
        )
    }
}

export default Sidebar


