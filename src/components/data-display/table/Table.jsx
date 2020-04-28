import React, { Component } from 'react'
import { TableHeaders } from './TableHeaders'
import { TableBody } from './TableBody'
import { Cell } from './Cell'
import "./table.scss";
import { TableRow } from './TableRow';

export class Table extends Component {
    constructor(props) {
        super(props)

        this.state = {
            config: { headers: [] }
        }
    }


    render() {
        const { config, data } = this.props;
        return (
            <div className="table-wrapper">
                <table className="table ">
                    
                    <TableHeaders className={"h-1"}>
                        {config.headers.map((h, i) => <Cell key={i} config={h}> {h.label} </Cell>)}
                    </TableHeaders>
                    <TableBody className={"h-10"}>
                        {
                            data ?
                                data.map((d, i) => <TableRow key={i} data={d} config={config.headers}></TableRow>
                                ) : "no data"
                        }
                    </TableBody>
                </table>
            </div>
        )
    }
}