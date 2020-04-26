import React from 'react';
import "./option-item.scss";

function getContent(option) {

    switch (typeof option) {
        case 'function':
            return option()
        case 'string':
            return option
        default:
            break;
    }
}

export const OptionItem = ({ option }) => {
    return (
        <div className="col-12-m sidebar-option" >
            <label style={{ paddingLeft: '14px' }} htmlFor="0">
                {
                    getContent(option.content)
                }
            </label>
        </div>
    )
}
