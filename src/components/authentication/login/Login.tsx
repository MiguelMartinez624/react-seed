import React, { FC } from 'react'
import { Input } from '../../forms/Input'
import { Card } from '../../content-wrappers/card/Card'
import { Link } from 'react-router-dom'

export const Login: FC<any> = () => {
    return (
        <div className="col-12 h-11">
            {/* <section className="right col-3 h-12"></section> */}
            <section className="second left col-12 h-12" style={{ justifyContent: 'center', display: 'flex', paddingTop: '20px' }}>

                <div className="col-3 h-8" >
                    <Card >
                        <div><h3>Login!</h3></div>
                        <Input label="Username/email"></Input>
                        <Input label="Password"></Input>

                        <p>Forgot your passwword?</p>

                        <h5>Dont have an account?</h5>
                        
                            <Link to="/auth-method">
                            <button className="col-12 btn btn-success" style={{ flex: 1 }}>
                            Sign Up
                        
                            </button>
                            </Link>

                        <div className="col-12" style={
                            {
                                display: 'flex',
                                position: 'absolute',
                                bottom: '5px',
                                width: 'calc(100% - 48px)'
                            }}>
                            <button className=" btn btn-cancel" style={{ flex: 1 }}>Cancelar</button>
                            <button className=" btn btn-success" style={{ flex: 1 }}>Log In</button>
                        </div>
                    </Card>
                </div>
            </section>

        </div>
    )
}

