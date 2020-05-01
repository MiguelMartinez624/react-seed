import React, { Component } from 'react'
import { Section } from '../../../layout'
import { Input } from '../../../forms'

export interface AddressManagerState { }
export default class AddressManager extends Component<any, AddressManagerState> {


    render() {
        return (

            <div className="col-12 f-center">
                <Section width={7}>
                   Account Address 
                </Section>


                <Section width={7}>
                    <Input label="Address"></Input>
                    <Input label="Last Name"></Input>
                </Section>

          
            </div>

        )
    }
}
