import React from 'react'

import './PhoneItem.css'

class PhoneItem extends React.Component {
    render() {
        const { img, model } = this.props;
        return (
            <div className="phone-item-container" data-test="phoneItem">
                <img
                    className="phone-image"
                    src={img}
                    alt={model}
                />
                <h5 className="phone-model">{model}</h5>
            </div>
        )
    }
}
  
export default PhoneItem;