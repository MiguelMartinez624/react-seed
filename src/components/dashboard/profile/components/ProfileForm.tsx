
import React, { Component, Fragment } from 'react'
import { Card } from '../../../content-wrappers/card/Card'
import { Input } from '../../../forms'
import { Section } from '../../../layout'

export class ProfileForm extends Component<any, any> {
    render() {
        return (

            <div>
                <Section width={12}>
                    Public Profile
                </Section>
                <Section width={12}>

                    <Input label="First Name"></Input>
                    <Input label="Last Name"></Input>
                </Section>
            </div>
        )
    }
}
