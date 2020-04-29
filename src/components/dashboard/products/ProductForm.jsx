import React, { Component } from 'react'
import  {Input}  from '../../forms/Input'
import { Card } from '../../content-wrappers/card/Card'
import { TextArea } from '../../forms/TextArea'

export class ProductForm extends Component {
    render() {
        return (
            <div className="col-12 h-12" style={{ justifyContent: 'center', display: 'flex', paddingTop: '20px' }}>


                <div className="col-9 h-11">
                    <Card>
                        <h4 className="sub-line">Register Product</h4>
                        <div className="col-5 h-10" style={{ marginRight: '10px',overflowY:'scroll' }}>

                            <h5>Basic information</h5>
                            <Input width={4} label="Name"></Input>
                            <TextArea label="Description"></TextArea>
                            <div className="col-6">
                                <Input label="Stock"></Input>
                            </div>
                            <div className="col-6">
                                <Input label="Price"></Input>
                            </div>
                            <h4>Dimensions</h4>
                            <div className="col-6">
                                <Input label="Weight"></Input>
                            </div>
                            <div className="col-6">
                                <Input label="Height"></Input>
                            </div>
                            <div className="col-6">
                                <Input label="Width"></Input>
                            </div>

                        </div>
                        <div className="col-6 h-11" >
                            <h5>Photos</h5>
                            <div className="col-12 h-10" style={{ display: 'flex', flexWrap: 'wrap', overflow: 'scroll' }}>
                                {/* and this one should be the trigger to add a image */}
                                <div className="photo-min"
                                    style={{
                                        backgroundSize: "contain",
                                        backgroundImage: `url("https://cdn4.iconfinder.com/data/icons/social-communication/142/add_photo-512.png")`
                                    }}
                                ></div>
                                {/* this one are gonna be for the acutal pictures */}
                                <div className="photo-min"></div>
                                <div className="photo-min"></div>
                                <div className="photo-min"></div>
                                <div className="photo-min"></div>
                                <div className="photo-min"></div>
                                <div className="photo-min"></div>
                                <div className="photo-min"></div>
                            </div>
                        </div>
                        <div className="col-12" style={
                            {
                                display: 'flex',
                                position: 'absolute',
                                bottom: '5px',
                                width: 'calc(100% - 48px)',
                                justifyContent: 'end'
                            }}>
                            <button className="col-2 btn btn-cancel" >Cancel</button>
                            <button className="col-2 btn btn-success" >Save</button>
                        </div>
                    </Card>

                </div>
            </div>
        )
    }
}

