import React, { Component } from 'react'

import { Card } from '../../../content-wrappers'
import Sidebar from '../../../layout/sidebar/Sidebar'
import { SectionBar, Section } from '../../../layout'
import { SoftCard } from '../../../content-wrappers'
import { ProfileForm } from './ProfileForm'

const profileOptions = [
    { icon: () => <span className="material-icons">perm_identity</span>, content: () => <h5>Profile</h5> },
    { icon: () => <span className="material-icons">credit_card</span>, content: () => <h5>Billing</h5> },
    { icon: () => <span className="material-icons">security</span>, content: () => <h5>Security</h5> },
]

export class Profile extends Component<any, any> {
    render() {
        return (
            <div className="col-10 h-10">
                <SectionBar width={12}>
                    This its the section
                    </SectionBar>
                <div className="col-12 h-12">
                    <Card style={{paddingLeft:'0px'}}>
                        <div className="h-12 col-2">

                            <Sidebar options={profileOptions} />

                        </div>
                        <div className="h-12 col-10 f-center">
                            <div className="h-12 col-7">

                            <ProfileForm></ProfileForm>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        )
    }
}

