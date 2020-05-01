import React, { FC } from 'react';
import "./section-bar.scss";

export interface SectionBarProps { width: number }
export const SectionBar: FC<SectionBarProps> = ({ children, width }) => {
    return (
        <div className={`section-bar primary col-${width !== undefined ? width : 12}`}>
            <div className="section-content">
                {children}

            </div>
        </div>
    )
}


