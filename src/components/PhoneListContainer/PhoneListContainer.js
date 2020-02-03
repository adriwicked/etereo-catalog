import React from 'react'
import { Link } from 'react-router-dom';

import PhoneItem from '../PhoneItem/PhoneItem'

import './PhoneListContainer.css'

class PhoneListContainer extends React.Component {
  constructor(props) {
    super(props);

    this.pageIncrement = 2
    this.state = {
      page: 0
    }
  }

  getCurrentPagePhones() {
    return this.props.phoneList.slice(
      this.state.page * this.pageIncrement,
      this.state.page * this.pageIncrement + this.pageIncrement
    )
  }

  goToPrevPage = () => {
    this.setState(prevState => {
      return prevState.page > 0 ? { page: prevState.page - 1 } : prevState;
    })
  }
  
  goToNextPage = () => {
    this.setState(prevState => {
      return prevState.page < this.props.phoneList.length / this.pageIncrement - 1 ?
        { page: prevState.page + 1 } :
        prevState;
    })
  }

  render() {
    const { phoneList, loading } = this.props;
      return loading ?
        <div className="spinner-container">
          <img
            className="spinner"
            src="https://pbs.twimg.com/profile_images/1107643598005305344/XqXTQc15_400x400.png"
            alt="img" />
        </div> :
        <>
          <ul className="phone-list-container">
          {
            this.getCurrentPagePhones().map(({ id, model, img }) => {
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
          <div className="paginator-container">
            <button className="pagination-button" onClick={this.goToPrevPage}>prev</button>
            <p className="current-page">{this.state.page + 1}</p>
            <button className="pagination-button" onClick={this.goToNextPage}>next</button>
          </div>
        </>
    }
  }

export default PhoneListContainer;