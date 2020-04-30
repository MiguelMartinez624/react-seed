import React, { Component } from 'react'


import { SoftCard } from '../../content-wrappers/soft-card/SoftCard'
import { Input } from '../../forms/Input'
import { Card } from '../../content-wrappers/card/Card'
import { AuthenticationService } from "../../../services";
import { RegisterUserDTO } from '../../../core/dto/register';
import { Link } from 'react-router-dom';


export interface RegistrationProps { compiler: string; framework: string; }
export interface RegistrationState {
    email?: string,
    password?: string,
    firstname?: string,
    lastname?: string,
    role?: string,
    username?: string
}
export class Registration extends Component<RegistrationProps, RegistrationState> {

    constructor(props: RegistrationProps) {
        super(props)

        this.state = {
            email: "",
            password: "",
            firstname: "",
            lastname: "",
            role: "",
            username: ""
        }
        this.handleValueChange = this.handleValueChange.bind(this);
    }

    public handleValueChange(value: any, name: string): void {
        this.setState({ [name]: value });
    }

    public submitForm(): void {
        const { email, firstname, lastname, password, role, username } = this.state
        let dto: RegisterUserDTO = new RegisterUserDTO(password, username, firstname, lastname, email, role);
        AuthenticationService.RegisterUser(dto)
            .then((result: any) => {
                console.log(result);
            })
            .catch((err) => {
                console.log(err);
            })

    }
    public renderOptionsTemplate() {
        return (
            <div style={{ color: 'black', textAlign: 'center' }}>
                <h5>What you want to do?</h5>

                <div className="col-12  " style={{ display: "flex", flexDirection: 'row', justifyContent: "space-evenly" }} >
                    <div>
                        <span className="material-icons" style={{ fontSize: '35px' }}>
                            storefront
                </span>
                    </div>
                    <div>
                        <span className="material-icons" style={{ fontSize: '35px' }}>
                            two_wheeler
                </span>
                    </div>
                    <div>
                        <span className="material-icons" style={{ fontSize: '35px' }}>
                            shopping_cart
                </span>
                    </div>
                </div>
            </div>
        )
    }

 

    render() {
        return (
            <div className="col-12 h-11">
                {/* <section className="right col-3 h-12"></section> */}
                <section className="second left col-12 h-12" style={{ justifyContent: 'center', display: 'flex', paddingTop: '20px' }}>
                    <div className="col-3 h-10">
                        <SoftCard className="primary">

                            <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                                <span className="material-icons" style={{ fontSize: '120px' }}>
                                    storefront
                                    </span>
                                <h3>My Market</h3>

                            </div>
                        </SoftCard>
                    </div>
                    <div className="col-4 h-10 " >
                        <Card >
                            <div><h3>SignUp for FREE!</h3></div>

                            <Input handleChange={this.handleValueChange} width={6} name="firstname" label="First Name"></Input>
                            <Input handleChange={this.handleValueChange} width={6} name="lastname" label="Last Name"></Input>
                            <Input handleChange={this.handleValueChange} name="username" label="Username/email"></Input>
                            <Input handleChange={this.handleValueChange} name="email" label="Email"></Input>
                            <Input handleChange={this.handleValueChange} name="password" label="Password"></Input>
                            {/* <Input label="Re-password"></Input> */}
                            {this.renderOptionsTemplate()}

            <Link to="/login">
            already have a account ?
            </Link>
                            

               
                            <div className="col-12" style={
                                {
                                    display: 'flex',
                                    position: 'absolute',
                                    bottom: '5px',
                                    width: 'calc(100% - 48px)'
                                }}>
                                <button className=" btn btn-cancel" style={{ flex: 1 }}>Cancelar</button>
                                <button onClick={this.submitForm} className=" btn btn-success" style={{ flex: 1 }}>Registrar</button>
                            </div>
                        </Card>
                    </div>
                </section>

            </div >
        )
    }
}



