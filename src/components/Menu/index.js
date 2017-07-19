import React from 'react'
import PropTypes from 'prop-types'
import { slide as SlideMenu } from 'react-burger-menu'

const Menu = (props) => {
  return (
    <div className="menu-container">
      <div className="fixed-menu">
        {props.children}
      </div>
      <SlideMenu>
        {props.children}
      </SlideMenu>
    </div>
  )
}

Menu.propTypes = {
  children: PropTypes.node,
}

Menu.defaultProps = {
  children: '',
}

export default Menu
