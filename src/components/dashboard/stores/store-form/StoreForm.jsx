import React, { Component } from 'react'
import { Card } from '../../../content-wrappers/card/Card'
import { Input } from '../../../forms/Input'
import { SoftCard } from '../../../content-wrappers/soft-card/SoftCard'

export class StoreForm extends Component {
    render() {
        return (
            <div className="col-12 h-12" style={{ justifyContent: 'center', display: 'flex', paddingTop: '20px' }}>


                <div className="col-8 h-10">
                    <Card>
                        <h4 className="sub-line">Register Store</h4>
                        <div className="col-5" style={{ marginRight: '10px' }}>

                            <h5>Basic information</h5>
                            <Input label="Name"></Input>
                        </div>
                        <div className="col-6">
                            <h5>Address Information</h5>

                            <SoftCard className="primary">
                                <p>
                                    <strong> NOTE:</strong> This information will be use for the delivery process.
                                </p>
                            </SoftCard>

                            <Input label="Direction "></Input>
                            <Input label="Direction 1"></Input>
                            <Input label="State"></Input>
                            <Input label="Country"></Input>
                        </div>
                        <div className="col-12" style={
                            {
                                display: 'flex',
                                position: 'absolute',
                                bottom: '5px',
                                width: 'calc(100% - 48px)'
                            }}>
                            <button className=" btn btn-cancel" style={{ flex: 1 }}>Cancel</button>
                            <button className=" btn btn-success" style={{ flex: 1 }}>Save</button>
                        </div>
                    </Card>

                </div>
            </div>
        )
    }
}

