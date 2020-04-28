import React from 'react';
import "./table.scss";

export function TableHeaders({children}) {
    return (
        <thead>

        <tr className="table-header">
            {children}
        </tr>
        </thead>
    )
}

