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
        <div className="col-12 sidebar-option" >
            <label style={{ paddingLeft: '14px', display: 'flex' }} className="col-12" htmlFor="0">
                {

                    option.icon ? option.icon() : ""
                }
                {
                    <span style={{paddingLeft:'20px'}}>
                        {getContent(option.content)}
                    </span>
                }
            </label>
        </div>
    )
}
