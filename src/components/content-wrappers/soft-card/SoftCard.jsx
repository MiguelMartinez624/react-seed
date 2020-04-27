import React from 'react';
import "./soft-card.scss";

export const SoftCard = ({children, className}) => {
    return (
        <div className={`soft-card ${ className }`} >
            <div style={{padding:"5px 24px",height:"100%"}}>

            {children}
            </div>
        </div>
    )
}
