import React, { Component, Fragment } from 'react'
import { Switch, Link } from "react-router-dom";
import { PrivateRoute } from "../routing-wrappers"
import { Stores } from "./stores/Stores"
import Sidebar from '../layout/sidebar/Sidebar';
import { StoreForm } from './stores/store-form/StoreForm';
import { ProductForm } from './products/ProductForm';
import { ProductList } from './products/ProductList';
import { Header } from '../layout/header/Header';
import { Profile } from './profile/components';

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
        content: () => <div className="primary" style={{ height: '3px' }}></div>
    },
    {
        name: 'Account',
        icon: () => <span className="material-icons">account_circle</span>,
        content: () => <Link to="/secure/stores" >  Account</Link>
    },
    {
        name: 'Account',
        icon: () => <span className="material-icons">account_circle</span>,
        content: () => <Link to="/secure/stores/create" >  Account</Link>
    },
    {
        name: 'Products',
        icon: () => <span className="material-icons">account_circle</span>,
        content: () => <Link to="/secure/products" >  Product List</Link>
    },
]

const headerOptions: import('../layout/header/Header').HeaderOption[] = [
    { component: () => <Link to="/secure/account    "><span style={{ fontSize: '40px' }} className="material-icons primary">account_circle</span></Link> }
]
export class Dashboard extends Component<any, any> {
    render() {
        return (
            <div className="col-12 h-12">

                <Header options={headerOptions}></Header>

                <div className="col-12 h-11" style={{ display: "flex" }}>

                    <div className="col-2 h-12" style={{ borderRight: "1px solid" }}>

                        <Sidebar options={navOptions}></Sidebar>
                    </div>
                    <div className="col-10 h-12 f-center" style={{ padding: "10px" }}>
                        <Switch>

                            <PrivateRoute path="/secure/account" itsAuthenticated={true} component={Profile} />
                            <PrivateRoute path="/secure/products" itsAuthenticated={true} component={ProductList} />
                            <PrivateRoute path="/secure/products/create" itsAuthenticated={true} component={ProductForm} />
                            <PrivateRoute path="/secure/stores/create" itsAuthenticated={true} component={StoreForm} />
                            <PrivateRoute path="/secure/stores" itsAuthenticated={true} component={Stores} />
                        </Switch>

                    </div>
                </div>
            </div>

        )
    }
}

export default Dashboard
