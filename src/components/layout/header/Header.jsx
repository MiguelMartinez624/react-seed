import React from 'react'
import "./header.scss"
const Header = () => {
    return (
        <header className="h-1 col-12 primary">
            <div className="col-8" style={{display:'flex',alignItems:'center',paddingLeft:'60px'}}>

            <span className="material-icons" style={{ fontSize: '40px' }}>
                                storefront
                                </span> 
                                <h4>My Market</h4>
            </div>

            <div className="col-4"  style={{display:'flex',justifyContent:'end',paddingRight:'60px'}} >
                <button className="btn btn-empty">Sign In</button>
                <button className="btn btn-empty">Sign Up</button>
            </div>
        </header>
    )
}

export default Header
