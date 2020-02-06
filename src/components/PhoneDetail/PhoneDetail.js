import React from 'react'

import Spinner from '../Spinner/Spinner'

import './PhoneDetail.scss'

class PhoneDetail extends React.Component {
    render() {
        const { phone } = this.props;
        return !phone ?
            <Spinner /> :
        (
            <div className="main-container">
                <div className="phone-detail__container">
                    <img className="phone-detail__image"
                        src={phone.img}
                        alt={phone.model} />
                    <h3 className="phone-detail__model">{phone.model}</h3>
                    <p className="phone-detail__info">Operative system: {phone.os}</p>
                    <p className="phone-detail__info">Price: {phone.price}</p>
                </div>
            </div>
        )
    }
}

export default PhoneDetail;