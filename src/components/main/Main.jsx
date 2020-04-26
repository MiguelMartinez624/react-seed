import React from 'react'
import "./main.scss"
import { SoftCard } from '../content-wrappers/soft-card/SoftCard'
import { Input } from '../forms/Input'

const Main = () => {
    return (
        <div className="col-12 h-11">
            <section className="right col-3 h-12"></section>
            <section className="second left col-9 h-12" style={{ justifyContent: 'center', display: 'flex', paddingTop: '20px' }}>
                <div className="col-5 h-8" >
                    <div className=" primary ">
                        Registrate
                </div>
                    <SoftCard >

                        <Input label="Email"></Input>
                        <Input label="Username/email"></Input>
                        <Input label="Password"></Input>
                        <Input label="Re-password"></Input>
                        

                        <div className="col-12" style={{ display: 'flex' }}>
                            <button className=" btn btn-cancel" style={{ flex: 1 }}>Cancelar</button>
                            <button className=" btn btn-success" style={{ flex: 1 }}>Registrar</button>
                        </div>


                    </SoftCard>
                </div>
            </section>

        </div>
    )
}

export default Main
