import React from 'react';
import "./card.scss";

export const Card = ({ children }) => {
    return (
        <div className="card">
            <div style={{ padding: "5px 24px",height:"100%" }}>

                {children}
            </div>
        </div>
    )
}
