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
    textAnchor: PropTypes.string,
    preserveAspectRatio: PropTypes.string,
    transform: PropTypes.string
  }

  render() {
    const { children, x, y, className, textAnchor, height, width, preserveAspectRatio, transform } = this.props
    return (
      <foreignObject
        x={x ? x : '0.3em'}
        y={y ? y : '0.3em'}
        className={className}
        textAnchor={textAnchor}
        preserveAspectRatio={preserveAspectRatio ? preserveAspectRatio : 'none'}
        transform={transform ? transform : ''}
        height={height}
        width={width}>
        {children}
      </foreignObject>
    )
  }
}

export default Text
