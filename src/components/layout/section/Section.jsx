import React from 'react';
import "./section.scss";

export function Section({ children, width }) {
    return (
        <div className={`section col-${width !== undefined ? width : 12}`}>
            <div className="section-content">
                {children}

            </div>
        </div>
    )
}


