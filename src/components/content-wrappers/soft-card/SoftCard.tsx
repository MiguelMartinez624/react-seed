import React, { FC } from 'react';
import "./soft-card.scss";
import { ResponsiveCol } from '../response-col/ResponsiveCol';

export const SoftCard: FC<any> = ({ children, className}) => {
    return (

        <div className={`soft-card ${className}`} >
            <div style={{ height: "100%" }}>

                {children}
            </div>
        </div>

    )
}
