import React from 'react'
import PropTypes from 'prop-types'
import './cardtext.scss'

const CardText = (props) => {
  return (
    <div className={`card-text${ props.additionalStyles ? ' ' + props.additionalStyles : '' }`}>
      {props.children}
    </div>
  );
}

CardText.propTypes = {
  additionalStyles: PropTypes.string,
  children: PropTypes.node
}

export default CardText
