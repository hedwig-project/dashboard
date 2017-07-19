import React from 'react'
import PropTypes from 'prop-types'
import './fixedmenu.scss'

const FixedMenu = (props) => (
  <div className='fixed-menu'>
    {props.children}
  </div>
)

FixedMenu.propTypes = {
  children: PropTypes.node
}

export default FixedMenu
