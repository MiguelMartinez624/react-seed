import React, { Component } from 'react'
import { Switch, Link } from "react-router-dom";
import { PrivateRoute} from "../routing-wrappers"
import { Stores } from "./stores/Stores"
import Sidebar from '../layout/sidebar/Sidebar';

const navOptions = [
    { name: 'Tiendas' },
    {
        name: 'Tiendas',
        content: () => <Link to="/secure/stores" >Tiendas</Link>
    },
]


export class Dashboard extends Component {
    render() {
        return (
            // sidebar
            <div className="col-12-m h-11-m" style={{ display: "flex" }}>
                <div className="col-2-m h-12-m" style={{ borderRight: "1px solid" }}>

                    <Sidebar options={navOptions}></Sidebar>
                </div>
                <div className="col-10-m h-12-m" style={{ padding: "10px" }}>
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
