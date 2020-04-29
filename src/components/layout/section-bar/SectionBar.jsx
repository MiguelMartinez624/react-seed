import React from 'react';
import "./section-bar.scss";

export function SectionBar({ children, width }) {
    return (
        <div className={`section-bar primary col-${width !== undefined ? width : 12}`}>
            <div className="section-content">
                {children}

            </div>
        </div>
    )
}


