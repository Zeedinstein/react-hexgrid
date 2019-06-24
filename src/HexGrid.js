import React, { Component } from 'react';
import PropTypes from 'prop-types';

class HexGrid extends Component {
  static propTypes = {
    viewBox: PropTypes.string,
    children: PropTypes.node.isRequired
  };

  static defaultProps = {
    viewBox: "-50 -50 100 100"
  }

  render() {
    const { viewBox } = this.props
    return (
      <svg className="grid" viewBox={viewBox} version="1.1" xmlns="http://www.w3.org/2000/svg">
        {this.props.children}
      </svg>
    );
  }
}
export default HexGrid;
