import React from 'react'
import './PhoneDetail.css'

class PhoneDetail extends React.Component {
    render() {
        const { phone } = this.props;
        return (
            <div className="phone-detail-container">
                <img className="phone-detail-image" src={phone.img} alt={phone.model} />
                <h3>{phone.model}</h3>
            </div>
        )
    }
}

export default PhoneDetail;