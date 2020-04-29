import React from 'react';
import "./store-item.scss";

export const StoreItem = ({ store }) => {
    return (
        <div className="store-item">
            <div className="avatar-image">
                <img src="" alt="" />
            </div>
            <div>
                <span>
                    {store.name}
                </span>

            </div>

        </div>
    )
}
