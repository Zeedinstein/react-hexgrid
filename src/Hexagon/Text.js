import React, { Component } from 'react'
import PropTypes from 'prop-types'

// TODO Text is a separate component so that it could wrap the given text inside the surrounding hexagon
class Text extends Component {
  static propTypes = {
    children: PropTypes.string,
    x: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    y: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    className: PropTypes.string,
    height: PropTypes.number,
    width: PropTypes.number,
    textAnchor: PropTypes.string
  }

  render() {
    const { children, x, y, className, textAnchor, height, width } = this.props
    return (
      <foreignObject
        x={x ? x : '0.3em'}
        y={y ? y : '0.3em'}
        className={className}
        textAnchor={textAnchor}
        height={height}
        width={width}>
        {children}
      </foreignObject>
    )
  }
}

export default Text
