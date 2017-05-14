import React from 'react'
import { Energy } from '../../components/Energy'
import { Security } from '../../components/Security'
import { Temperature } from '../../components/Temperature'
import { Menu } from '../../components/Menu'
import './app.scss'

const App = () => (
  <div className='app-container'>
    <Menu>
      <a className="menu-item" href="/">
        <i className="fa fa-home menu-item-icon" aria-hidden="true"></i>
        <span className="menu-item-name">Home</span>
      </a>
      <a className="menu-item" href="/temperatura">
        <i className="fa fa-thermometer-2 menu-item-icon" aria-hidden="true"></i>
        <span className="menu-item-name">Temperatura</span>
      </a>
      <a className="menu-item" href="/energia">
        <i className="fa fa-plug menu-item-icon" aria-hidden="true"></i>
        <span className="menu-item-name">Energia</span>
      </a>
      <a className="menu-item" href="/seguranca">
        <i className="fa fa-lock menu-item-icon" aria-hidden="true"></i>
        <span className="menu-item-name">Segurança</span>
      </a>
      <a className="menu-item" href="/configuracoes">
        <i className="fa fa-edit menu-item-icon" aria-hidden="true"></i>
        <span className="menu-item-name">Configurações</span>
      </a>
    </Menu>
    <div className='app-content'>
      <Security />
      <Energy />
      <Temperature />
    </div>
  </div>
)

export default App
