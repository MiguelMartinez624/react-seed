import React, { FC } from 'react';
import "./soft-card.scss";

export const SoftCard: FC<any> = ({ children, className}) => {
    return (

        <div className={`soft-card ${className}`} >
            <div style={{ height: "100%" }}>

                {children}
            </div>
        </div>

    )
}
