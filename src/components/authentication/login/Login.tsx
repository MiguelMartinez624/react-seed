import React, { Component } from 'react'
import { Input } from '../../forms/Input'
import { Card } from '../../content-wrappers/card/Card'
import { Link } from 'react-router-dom'
import { AuthenticationService } from '../../../services'
export interface LoginProps { className:string }
export interface LoginState {
    username: string; password: string;
}
export class Login extends Component<LoginProps, LoginState> {
    constructor(props:LoginProps) {
        super(props)
    
        this.state = {
             username:"",
             password:""
        }
        this.handleValueChange = this.handleValueChange.bind(this);
        this.submitForm = this.submitForm.bind(this);

    }
    
    public submitForm(): void {
        let creds = {
            username:this.state.username,
            password:this.state.password
        }

        AuthenticationService.SignIn(creds)
            .then((result: any) => {
                console.log(result);
            })
            .catch((err:any) => {
                console.log(err);
            })

    }

    public handleValueChange(value: any, name: string): void {
        this.setState(prevState =>{
            return{
                 ...prevState,
                 [name]:value
            }
         })
    }

    render (){
    return (
        <div className="col-12 h-11">
            {/* <section className="right col-3 h-12"></section> */}
            <section className="second left col-12 h-12" style={{ justifyContent: 'center', display: 'flex', paddingTop: '20px' }}>

                <div className="col-3 h-8" >
                    <Card >
                        <div><h3>Login!</h3></div>
                        <Input  handleChange={this.handleValueChange} name="username" label="Username/email"></Input>
                        <Input  handleChange={this.handleValueChange} name="password" label="Password"></Input>

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
                            <button onClick={this.submitForm} className=" btn btn-success" style={{ flex: 1 }}>Log In</button>
                        </div>
                    </Card>
                </div>
            </section>

        </div>
    )
}
}

