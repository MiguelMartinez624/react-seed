import React, { Component, Fragment } from 'react'
import './registration.scss';
import { Link } from 'react-router-dom';


import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import { Card } from '../../../content-wrappers/card/Card';
import { Section } from '../../../layout/section/Section';
export class AuthSelector extends Component<any, any> {
    public renderAuthProviders() {
        return (

            <Fragment >
                <div className="col-10" style={{ margin: '10px 0px' }}>

                    <GoogleLogin
                        className="col-12 auth-mehotd-card"
                        style={{ fontSize: '0.70rem', display: 'flex', justifyContent: 'center' }}
                        clientId="788786912619-.apps.googleusercontent.com"
                        buttonText="Login with Google"
                        onSuccess={() => { }}
                        onFailure={() => { }} ></GoogleLogin>
                </div>
                <div className="col-10" style={{ margin: '10px 0px' }}>
                    <FacebookLogin

                        buttonStyle={{ fontSize: '0.60rem', height: '44px', width: "100%" }}
                        appId=""
                        autoLoad={true}
                        fields="name,email,picture"
                        scope="public_profile,user_friends"
                        callback={() => { }}
                        icon="fa-facebook" />
                </div>
            </Fragment>
        )
    }
    render() {
        return (
            <div className="col-12 h-12 f-center" style={{overflow:'auto'}}>
                <div className="col-3 h-10 " style={{ margin: '50px 0px', }} >
                    <Card >
                        <div className="f-center" style={{ paddingTop: '40px' }}>
                            <Section width={10}>
                                Join My Market
                            <p>
                                    Create and account ad enjoin all services with provide to you,
                                    to make some incommings, boost you bussness or just shop what you want
                                    when you want it without leaving Home.
                            </p>
                            </Section>

                            {this.renderAuthProviders()}
                            <Link className="col-10" to="/signup">
                            <div style={{backgroundColor:'green',color:'white'}} className="col-12 auth-mehotd-card">
                                <span className="material-icons">storefront </span> <p> my_market account </p>
                            </div>
                            </Link>

                            <Section width={10}>
                            <p>
                                <Link to="/login">
                            Already have an account?
                                </Link>
                            </p>
                            </Section>

                        </div>
                    </Card>
                </div>

            </div >
        )
    }
}
