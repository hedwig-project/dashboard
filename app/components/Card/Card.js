import React from 'react'
import PropTypes from 'prop-types'
import './card.scss'

const Card = (props) => {
  return (
    <div className={`card${ props.additionalStyles ? ' ' + props.additionalStyles : '' }`}>
      {props.children}
    </div>
  );
}

Card.propTypes = {
  additionalStyles: PropTypes.string,
  children: PropTypes.node
}

export default Card
