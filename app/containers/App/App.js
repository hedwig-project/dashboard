import React from 'react'
import { Card, CardHeader, CardText } from '../../components/Card'
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
    <Card>
      <CardHeader>Segurança</CardHeader>
      <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </CardText>
    </Card>
      <Card>
        <CardHeader>Temperatura</CardHeader>
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </CardText>
      </Card>
      <Card>
        <CardHeader>Energia</CardHeader>
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </CardText>
      </Card>
    </div>
  </div>
)

export default App
