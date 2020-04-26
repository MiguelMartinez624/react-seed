import React, { Component } from 'react'

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
                <div className="card col-5-m h-8-m">
                    {this.stores.map((s, i) =>
                        <div key="i">
                            <h5>
                                {s.name}
                            </h5>
                        </div>
                    )
                    }
                </div>
            </div>
        )
    }
}

export default Stores
