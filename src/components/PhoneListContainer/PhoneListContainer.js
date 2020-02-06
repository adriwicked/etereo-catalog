import React from 'react'
import { Link } from 'react-router-dom';

import Spinner from '../Spinner/Spinner'
import PhoneItem from '../PhoneItem/PhoneItem'

import './PhoneListContainer.scss'

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
          <ul className="phone-list__container">
          {
            this.getCurrentPagePhones().map(({ id, model, img }) => {
              return (
                <li className="phone-list__item" key={id}>
                  <Link className="phone-list__link" to={`/phones/${id}`}>
                    <PhoneItem model={model} img={img} />
                  </Link>
                </li>
              )
            })
          }
          </ul>
          <div className="paginator__container">
            <button className="paginator__button" onClick={this.goToPrevPage}>prev</button>
            <p className="paginator__current-page">{this.state.page + 1}</p>
            <button className="paginator__button" onClick={this.goToNextPage}>next</button>
          </div>
        </>
    }
  }

export default PhoneListContainer;