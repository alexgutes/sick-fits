import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Meta from './Meta';

export default class Page extends Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Meta />
        <Header />
        {children}
      </div>
    );
  }
}
Page.propTypes = {
  children: PropTypes.node.isRequired,
};
