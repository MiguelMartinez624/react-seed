import React, { Component } from 'react'

import { Card } from '../../../content-wrappers'
import Sidebar from '../../../layout/sidebar/Sidebar'
import { SectionBar } from '../../../layout'
import { ProfileForm } from './ProfileForm'
import { PrivateRoute } from '../../../routing-wrappers'
import { Link } from 'react-router-dom'
import AddressManager from './AddressManager'

const profileOptions = [
    { icon: () => <span className="material-icons">perm_identity</span>, content: () => <Link to="/secure/account/profile"> <h5>Profile</h5></Link> },
    { icon: () => <span className="material-icons">location_on</span>, content: () => <Link to="/secure/account/address"> <h5>Address</h5></Link>  },
    { icon: () => <span className="material-icons">credit_card</span>, content: () => <Link to="/secure/account/billing"><h5>Billing</h5></Link> },
    { icon: () => <span className="material-icons">security</span>, content: () => <Link to="/secure/account/security"> <h5>Security</h5></Link> },
]

export class Profile extends Component<any, any> {
    render() {
        return (
            <div className="col-11 h-11">
                <SectionBar width={12}>
                    <h5>Account Settings</h5>
                </SectionBar>
                <div className="col-12 h-12">
                    <Card style={{ padding: '0px' }}>
                        <div className="h-12 col-2" style={{ borderRight: "1px solid" }}>

                            <Sidebar options={profileOptions} />

                        </div>
                        <div className="h-12 col-9 f-center">
                            <div className="h-12 col-12 " style={{ padding: '10px' }}>
                                <PrivateRoute path="/secure/account/profile" itsAuthenticated={true} component={ProfileForm} />
                                <PrivateRoute path="/secure/account/address" itsAuthenticated={true} component={AddressManager} />

                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        )
    }
}

