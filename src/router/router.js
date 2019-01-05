import React from 'react';

import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';

import RegisterPage from 'bundle-loader?lazy&name=RegisterPage!../containers/RegisterPage';
import LogInPage from 'bundle-loader?lazy&name=LogInPage!../containers/LogInPage';
import ContentLeft from 'bundle-loader?lazy&name=ContentLeft!../containers/ContentLeft';
import ContentRight from 'bundle-loader?lazy&name=ContentRight!../containers/ContentRight';
import Bundle from './Bundle';

const Loading = function () {
  return <div>Loading...</div>;
};

const createComponent = component => props => (
  <Bundle load={component}>
    {Component => (Component ? <Component {...props} /> : <Loading />)}
  </Bundle>
);

const routes = [
  {
    path: '/',
    exact: true
  },
  {
    path: '/index',
    exact: true
  },
  {
    path: '/robot',
    exact: true
  },
  {
    path: '/group_chat/:group_id',
    exact: true
  },
  {
    path: '/private_chat/:user_id',
    exact: true
  },
];

export default function getRouter() {
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  if (userInfo) {
    console.log('initMessage~~');
    socket.emit('initMessage', userInfo.user_id);
  }
  return (
    <Router>
      <div className="layout-wrapper">
        <Route path="/register" exact component={createComponent(RegisterPage)} />
        <Route path="/login" exact component={createComponent(LogInPage)} />
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={createComponent(ContentLeft)} />
        ))}
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={createComponent(ContentRight)} />
        ))}
      </div>
    </Router>
  );
}
