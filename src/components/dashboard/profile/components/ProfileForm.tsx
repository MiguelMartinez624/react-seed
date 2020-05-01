
import React, { Component, Fragment } from 'react'
import { Input } from '../../../forms'
import { Section } from '../../../layout'
import { ResponsiveCol } from '../../../content-wrappers/response-col/ResponsiveCol'

export class ProfileForm extends Component<any, any> {
    render() {
        return (
            <Fragment>
                <div className="col-12 h-12">
                    <div className="col-5 h-12 f-center">
                        <div style={{ width: '190px' }} className="h-10" >
                            <Section width={12}>
                                <h5>

                                    Profile Picture
                        </h5>
                            </Section>
                            <ResponsiveCol width={12}>
                                <div style={{ height: '190px', width: '190px', backgroundColor: '#d8d8de' }}>


                                </div>
                            </ResponsiveCol>
                            <div className="col-12" style={{ display: 'flex', alignItems: 'center', fontSize: '0.8rem' }}>
                                <span className="material-icons ">edit</span><span> Edit picture</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-7">
                        <Section width={12}>
                            Public Profile
                </Section>
                        <Section width={12}>

                            <Input label="First Name"></Input>
                            <Input label="Last Name"></Input>
                        </Section>

                        <Section width={12}>
                            Contact Info
                </Section>
                        <Section width={12}>

                            <Input label="Email"></Input>
                            <Input width={2} label="Code"></Input>
                            <Input width={10} label="Phone Number"></Input>
                        </Section>
                    </div>
                </div>
                </Fragment>
        )
    }
}
