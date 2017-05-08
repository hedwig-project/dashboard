import React from 'react'
import PropTypes from 'prop-types'
import './cardheader.scss'

const CardHeader = (props) => {
  return (
    <div className={`card-header ${ props.additionalStyles }`}>
      {props.children}
    </div>
  );
}

CardHeader.propTypes = {
  additionalStyles: PropTypes.string,
  children: PropTypes.node
}

export default CardHeader
