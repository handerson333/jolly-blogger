import './App.scss';
import React, { Component } from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import asyncComponent from './hoc/asyncComponent/asyncComponent';
import Blogs from './containers/Blogs/Blogs';
import BlogContent from './containers/BlogEdit/BlogContent/BlogContent';
import Layout from './containers/Layout/Layout';
import Logout from './containers/Auth/Logout/Logout';
import * as actions from './store/actions/';

const asyncAuth = asyncComponent(() => {
  return import('./containers/Auth/Auth');
});

class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignUp();
  }
  render() {
    let routes = (
      <Switch>
        <Route path='/auth' component={asyncAuth} />
        <Route path='/edit' exact component={BlogContent} />
        <Route path='/' component={Blogs} />
        <Redirect to='/' />
      </Switch>

    );
    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path='/edit' exact component={BlogContent} />
          <Route path='/logout' component={Logout} />
          <Route path='/auth' component={asyncAuth} />
          <Route path='/' component={Blogs} />
          <Redirect to='/' />
        </Switch>
      )
    }

    return (
      <div className="App">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  }
}


const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignUp: () => dispatch(actions.authCheckState())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
