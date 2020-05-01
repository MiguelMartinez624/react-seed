import React, { Component } from 'react'
import { OptionItem } from "./option-item/OptionItem"

export interface SidebarProps { options: any[] }
export class Sidebar extends Component<SidebarProps, any> {


    render() {
        const { options } = this.props
        return (
            <div className="col-12 h-12">
                {options.map((option: any, i: number) => <OptionItem key={i} option={option}></OptionItem>)}
            </div>
        )
    }
}

export default Sidebar


