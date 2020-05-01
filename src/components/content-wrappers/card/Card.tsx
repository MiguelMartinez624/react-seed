import React, { FC } from 'react';
import "./card.scss";

export const Card: FC<{ children: any, style?: any }> = ({ children, style }) => {
    return (
        <div className="card">
            <div style={{ padding: "5px 24px", height: "100%" ,...style}}>

                {children}
            </div>
        </div>
    )
}
