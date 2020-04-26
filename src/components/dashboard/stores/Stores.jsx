import React, { Component } from 'react'
import { StoreItem } from './store-item/StoreItem'
import { Card } from '../../content-wrappers/card/Card'

export class Stores extends Component {
    stores = [
        { name: 'Tienda 1' },
        { name: 'Tienda 2' },
        { name: 'Tienda 3' },
    ]

    render() {
        return (
            <div>
                <div className="section-header">
                    Tus Tiendas
                </div>
                <div className=" col-5 h-8">
                    <Card>
                        {
                        this.stores.map((s, i) => <StoreItem key={i} store={s} ></StoreItem>)
                        }
                    </Card>
                </div>
            </div>
        )
    }
}

export default Stores
