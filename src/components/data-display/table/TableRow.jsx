import React from 'react'
import { Cell } from './Cell'

export function TableRow({ config, data }) {
    return (
        <tr className="table-row">
            {config.map((h, i) => <Cell key={i} config={h}> {data[h.property]} </Cell>)}
        </tr>
    )
}

