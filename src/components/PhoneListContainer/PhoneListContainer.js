import React from 'react'
import { Link } from 'react-router-dom';

import PhoneItem from '../PhoneItem/PhoneItem'

import './PhoneListContainer.css'

class PhoneListContainer extends React.Component {
  render() {
    const { phoneList, loading } = this.props;
      return loading ?
        <div className="spinner-container">
          <img
            className="spinner"
            src="https://pbs.twimg.com/profile_images/1107643598005305344/XqXTQc15_400x400.png"
            alt="img" />
        </div> :
        <ul className="phone-list-container">
          {
            phoneList.map(({ id, model, img }) => {
              return (
                <li className="phone-item" key={id}>
                  <Link className="phone-item-link" to={`/${id}`}>
                    <PhoneItem model={model} img={img} />
                  </Link>
                </li>
              )
            })
          }
        </ul>
    }
  }

export default PhoneListContainer;