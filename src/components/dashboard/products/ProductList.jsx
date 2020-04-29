import React, { Component } from 'react'
import { Table } from '../../data-display/table'
import { SoftCard } from '../../content-wrappers/soft-card/SoftCard'
import { SectionBar } from '../../layout/section-bar/SectionBar'
import { Section } from '../../layout/section/Section'
import { Input } from '../../forms'
const tableConfig = {
    headers: [
        { label: "Name", property: "name" },
        { label: "Name", property: "price" },
        { label: "Name", property: "size" },
        { label: "Name", property: "stock" },
        { label: "Name", property: "width" },

    ]
}


const data = [
    { name: "product 1", size: 12, price: 12.32, stock: 100, width: 32 },
    { name: "product 1", size: 12, price: 12.32, stock: 100, width: 32 },
    { name: "product 1", size: 12, price: 12.32, stock: 100, width: 32 },
    { name: "product 1", size: 12, price: 12.32, stock: 100, width: 32 },
    { name: "product 1", size: 12, price: 12.32, stock: 100, width: 32 },


]

export class ProductList extends Component {
    render() {
        return (
            <div className="col-12 h-12 f-center" >
                <SectionBar width="7">
                    <h4>Products</h4>

                </SectionBar>
                <Section width="7">
                    <Input width="5" pre={() => <i className="material-icons">search</i>}></Input>

                    {/* actions */}
                    <div className="col-7 f-left">
                        <button className="btn btn-success">Add</button>
                    </div>
                </Section>
                <div className="col-7 h-6">
                    <SoftCard>
                        <Table data={data} config={tableConfig}></Table>
                    </SoftCard>
                </div>
            </div>
        )
    }
}
