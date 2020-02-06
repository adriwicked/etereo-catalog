import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux'

import fetchPhones from './redux/actions'

import Header from './components/Header/Header';
import PhoneListContainer from './components/PhoneListContainer/PhoneListContainer';
import PhoneDetail from './components/PhoneDetail/PhoneDetail';

import './resets.css';

class App extends React.Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchPhones());
  }

  getPhoneById(id) {
    const { phoneList } = this.props;
    const phone = phoneList.find(phone => phone.id === id);
    return phone || null;
  }

  renderPhoneList = () => {
    const { loading, phoneList } = this.props;
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

function mapStateToProps(state) {
  const { phoneList, loading } = state;
  return {
    phoneList,
    loading
  }
}

export default connect(mapStateToProps)(App);
