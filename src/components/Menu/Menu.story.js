import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Menu from './index.js';

function buildStory() {
  return (
    <Menu>
      <a className="menu-item" href="/">
        <i className="fa fa-home menu-item-icon" aria-hidden="true" />
        <span className="menu-item-name">Home</span>
      </a>
      <a className="menu-item" href="/temperatura">
        <i className="fa fa-thermometer-2 menu-item-icon" aria-hidden="true" />
        <span className="menu-item-name">Temperatura</span>
      </a>
      <a className="menu-item" href="/energia">
        <i className="fa fa-plug menu-item-icon" aria-hidden="true" />
        <span className="menu-item-name">Energia</span>
      </a>
      <a className="menu-item" href="/seguranca">
        <i className="fa fa-lock menu-item-icon" aria-hidden="true" />
        <span className="menu-item-name">Segurança</span>
      </a>
      <a className="menu-item" href="/configuracoes">
        <i className="fa fa-edit menu-item-icon" aria-hidden="true" />
        <span className="menu-item-name">Configurações</span>
      </a>
    </Menu>
  )
}

storiesOf('Menu', module)
  .add('menu', () => buildStory());
