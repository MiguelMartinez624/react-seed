import React, { Component } from 'react'
import "./header.scss"

export interface HeaderOption { component: Function }
export interface HeaderProps { options: HeaderOption[] }

export class Header extends Component<HeaderProps, any> {

    render() {
        const { options } = this.props;
        return (
            <header className="h-1 col-12 primary">
                <div className="col-8" style={{ display: 'flex', alignItems: 'center', paddingLeft: '60px' }}>

                    <span className="material-icons" style={{ fontSize: '40px' }}>
                        storefront
                                </span>
                    <h4>My Market</h4>
                </div>

                <div className="col-4" style={{ display: 'flex', justifyContent: 'end', paddingRight: '60px' }} >
                    {
                        options.map(o => o.component())
                    }
                </div>
            </header>
        )
    }
}


