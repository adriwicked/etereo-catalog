import React from 'react'
import { Link } from 'react-router-dom';

import Spinner from '../Spinner/Spinner'
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
    const { loading } = this.props;
      return loading ?
        <Spinner /> :
        <>
          <ul className="phone-list-container">
          {
            this.getCurrentPagePhones().map(({ id, model, img }) => {
              return (
                <li className="phone-item" key={id}>
                  <Link className="phone-item-link" to={`/phones/${id}`}>
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