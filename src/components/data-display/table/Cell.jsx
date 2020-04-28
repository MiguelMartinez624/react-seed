import React from 'react'
import "./table.scss";

export function Cell(props) {
    const {  children } = props;
    // console.log(config)
    return (
        <td className="base-cell">
            {children}
        </td>
    )
}
