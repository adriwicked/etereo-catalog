import React from 'react'

import Spinner from '../Spinner/Spinner'

import './PhoneDetail.css'

class PhoneDetail extends React.Component {
    render() {
        const { phone } = this.props;
        return !phone ?
            <Spinner /> :
        (
            <div className="main-container">
                <div className="phone-detail-container">
                    <img className="phone-detail-image"
                        src={phone.img}
                        alt={phone.model} />
                    <h3 className="phone-model">{phone.model}</h3>
                    <p className="phone-details">Operative system: {phone.os}</p>
                    <p className="phone-details">Price: {phone.price}</p>
                </div>
            </div>
        )
    }
}

export default PhoneDetail;