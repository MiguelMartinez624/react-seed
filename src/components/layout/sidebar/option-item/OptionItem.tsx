import React, { FC } from 'react';
import "./option-item.scss";

function getContent(option: any) {

    switch (typeof option) {
        case 'function':
            return option()
        case 'string':
            return option
        default:
            break;
    }
}

export const OptionItem: FC<any> = ({ option }) => {
    return (
        <div className="col-12 sidebar-option " >
            <label style={{ paddingLeft: '14px', display: 'flex' }} className="col-12" htmlFor="0">
                {

                    option.icon ? option.icon() : ""
                }
                {
                    <span style={{ paddingLeft: '20px' }}>
                        {getContent(option.content)}
                    </span>
                }
            </label>
        </div>
    )
}
