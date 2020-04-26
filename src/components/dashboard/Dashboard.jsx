import React, { Component } from 'react'
import { Switch, Link } from "react-router-dom";
import { PrivateRoute } from "../routing-wrappers"
import { Stores } from "./stores/Stores"
import Sidebar from '../layout/sidebar/Sidebar';

const navOptions = [
    {
        name: 'Tiendas',
        icon: () => <span className="material-icons">storefront</span>,
        content: () => <Link to="/secure/stores" > Tiendas</Link>
    },
    {
        name: 'Tiendas',
        icon: () => <span className="material-icons">list_alt</span>,
        content: () => <Link to="/secure/stores" ><span className="material-icons"></span> Orders</Link>
    },
    {
        name: 'Tiendas',
        // icon: () => <span className="material-icons">list_alt</span>,
        content:()=><div className="primary" style={{height:'3px'}}></div>
    },
    {
        name: 'Account',
        icon: () => <span className="material-icons">account_circle</span>,
        content: () => <Link to="/secure/stores" >  Account</Link>
    },
]


export class Dashboard extends Component {
    render() {
        return (
            // sidebar
            <div className="col-12 h-11" style={{ display: "flex" }}>
                <div className="col-2 h-12" style={{ borderRight: "1px solid" }}>

                    <Sidebar options={navOptions}></Sidebar>
                </div>
                <div className="col-10 h-12" style={{ padding: "10px" }}>
                    <Switch>

                        <PrivateRoute path="/secure/stores" itsAuthenticated={true} component={Stores} />
                    </Switch>

                </div>
            </div>
            // main content
        )
    }
}

export default Dashboard
