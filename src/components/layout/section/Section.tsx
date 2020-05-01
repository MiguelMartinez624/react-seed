import React, { FC } from 'react';
import "./section.scss";

export const Section: FC<{ width: number }> = ({ children, width }) => {
    return (
        <div className={`section col-${width !== undefined ? width : 12}`}>
            <div className="section-content">
                {children}

            </div>
        </div>
    )
}


