import React from 'react'

import './PhoneItem.scss'

class PhoneItem extends React.Component {
  render() {
    const { img, model } = this.props;
    return (
      <div className="phone-item__container" data-test="phoneItem">
        <img
          className="phone-item__image"
          src={img}
          alt={model}
        />
        <h5 className="phone-item__model">{model}</h5>
      </div>
    )
  }
}
  
export default PhoneItem;