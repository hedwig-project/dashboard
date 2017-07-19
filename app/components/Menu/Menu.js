import React from 'react'
import PropTypes from 'prop-types'
import { slide as SlideMenu } from 'react-burger-menu'
import FixedMenu from './FixedMenu'
import './menu.scss'

const Menu = (props) => (
  <div className='menu-container'>
    <FixedMenu>
      {props.children}
    </FixedMenu>
    <SlideMenu>
      {props.children}
    </SlideMenu>
  </div>
)

Menu.propTypes = {
  children: PropTypes.node
}

export default Menu
