import React, { Component } from 'react'

import { Card } from '../../../content-wrappers/card/Card'
import Sidebar from '../../../layout/sidebar/Sidebar'
import { SectionBar } from '../../../layout'

const profileOptions = [
    { icon: () => <span className="material-icons">perm_identity</span>, content: () => <h5>Profile</h5> },
    { icon: () => <span className="material-icons">credit_card</span>, content: () => <h5>Billing</h5> },
    { icon: () => <span className="material-icons">security</span>, content: () => <h5>Security</h5> },
]

export class Profile extends Component<any, any> {
    render() {
        return (
            <div className="col-10 h-10">
                <Card>
                    <SectionBar width={12}>
                        Section
                    </SectionBar>
                    <div className="col-2 h-12">
                        <Sidebar options={profileOptions}

                        ></Sidebar>
                    </div>
                    <div className="col-8 h-12"></div>
                </Card>
            </div>
        )
    }
}

