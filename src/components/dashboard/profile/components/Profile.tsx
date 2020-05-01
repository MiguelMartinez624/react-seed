import React, { Component } from 'react'

import { Card } from '../../../content-wrappers'
import Sidebar from '../../../layout/sidebar/Sidebar'
import { SectionBar, Section } from '../../../layout'
import { SoftCard } from '../../../content-wrappers'
import { ProfileForm } from './ProfileForm'

const profileOptions = [
    { icon: () => <span className="material-icons">perm_identity</span>, content: () => <h5>Profile</h5> },
    { icon: () => <span className="material-icons">location_on</span>, content: () => <h5>Address</h5> },
    { icon: () => <span className="material-icons">credit_card</span>, content: () => <h5>Billing</h5> },
    { icon: () => <span className="material-icons">security</span>, content: () => <h5>Security</h5> },
]

export class Profile extends Component<any, any> {
    render() {
        return (
            <div className="col-9 h-10">
                <SectionBar width={12}>
                    This its the section
                    </SectionBar>
                <div className="col-12 h-12">
                    <Card style={{padding:'0px'}}>
                        <div className="h-12 col-2" style={{ borderRight: "1px solid" }}>

                            <Sidebar options={profileOptions} />

                        </div>
                        <div className="h-12 col-9 f-center">
                            <div className="h-12 col-12" style={{padding:'10px'}}>

                            <ProfileForm></ProfileForm>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        )
    }
}

