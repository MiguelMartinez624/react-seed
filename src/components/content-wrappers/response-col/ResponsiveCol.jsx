
import React from 'react'

export function ResponsiveCol({ width, children }) {
    return (
        <div className={`col-${width !== undefined ? width : 12}`}>
            {children}
        </div>
    )
}
