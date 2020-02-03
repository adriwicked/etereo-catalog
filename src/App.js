import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import getPhoneList from './services/phones';

import Header from './components/Header/Header';
import PhoneListContainer from './components/PhoneListContainer/PhoneListContainer';
import PhoneDetail from './components/PhoneDetail/PhoneDetail';

import './resets.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      phoneList: []
    }
  }

  componentDidMount() {
    this.setState({ loading: true })
    getPhoneList()
      .then(({ data: phoneList }) => {
        setTimeout(() => {
          this.setState({ phoneList, loading: false })
        }, 1000);
      }).catch(err => console.log(err));
  }

  getPhoneById(id) {
    const phone = this.state.phoneList.find(phone => phone.id === id);
    return phone || null;
  }

  renderPhoneList = () => {
    const { loading, phoneList } = this.state;
    return <PhoneListContainer phoneList={phoneList} loading={loading} />;
  }

  renderPhoneDetail = ({ match: { params: { phoneId } } }) => {
    return <PhoneDetail phone={this.getPhoneById(phoneId)} />
  }

  render() {
    return (
      <Fragment>
        <Header />
        <Router>
          <Switch>
            <Route exact path="/phones" render={this.renderPhoneList} />
            <Route path="/phones/:phoneId" render={this.renderPhoneDetail} />
          </Switch>
        </Router>
      </Fragment>
    );
  }
}

export default App;
