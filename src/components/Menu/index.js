import React from 'react'
import PropTypes from 'prop-types'
import AppBar from 'material-ui/AppBar'
import Divider from 'material-ui/Divider'
import Drawer from 'material-ui/Drawer'
import FontIcon from 'material-ui/FontIcon'
import MenuItem from 'material-ui/MenuItem'

/* eslint-disable arrow-body-style */
class Menu extends React.Component {
  state = {
    open: false,
  };

  handleChange = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    return (
      <div>
        <AppBar
          title="Hedwig"
          onLeftIconButtonTouchTap={this.handleChange}
          style={{ backgroundColor: '#424242' }}
        />
        <Drawer
          docked={false}
          open={this.state.open}
          onRequestChange={open => this.setState({ open })}
        >
          <MenuItem
            style={{
              backgroundColor: '#424242',
              color: '#FFFFFF',
              fontSize: '24px',
              lineHeight: '64px',
              height: '64px',
            }}
          >
            Hedwig
          </MenuItem>
          <a href="/access" style={{ textDecoration: 'none' }}>
            <MenuItem
              leftIcon={<FontIcon className="fa fa-lock" />}
            >
              Acesso
            </MenuItem>
          </a>
          <a href="/aquarium" style={{ textDecoration: 'none' }}>
            <MenuItem
              leftIcon={<FontIcon className="fa fa-tint" />}
            >
              Aquário
            </MenuItem>
          </a>
          <a href="/hallway" style={{ textDecoration: 'none' }}>
            <MenuItem
              leftIcon={<FontIcon className="fa fa-square" />}
            >
              Corredor
            </MenuItem>
          </a>
          <a href="/kitchen" style={{ textDecoration: 'none' }}>
            <MenuItem
              leftIcon={<FontIcon className="fa fa-cutlery" />}
            >
              Cozinha
            </MenuItem>
          </a>
          <a href="/laundry" style={{ textDecoration: 'none' }}>
            <MenuItem
              leftIcon={<FontIcon className="fa fa-shirtsinbulk" />}
            >
              Lavanderia
            </MenuItem>
          </a>
          <a href="/livingroom" style={{ textDecoration: 'none' }}>
            <MenuItem
              leftIcon={<FontIcon className="fa fa-television" />}
            >
              Sala
            </MenuItem>
          </a>
          <a href="/#" style={{ textDecoration: 'none' }}>
            <MenuItem
              leftIcon={<FontIcon className="fa fa-plus-circle" />}
            >
              Adicionar módulo...
            </MenuItem>
          </a>
          <Divider />
          <a href="/#" style={{ textDecoration: 'none' }}>
            <MenuItem
              leftIcon={<FontIcon className="fa fa-cog" />}
            >
              Configurações
            </MenuItem>
          </a>
          <a href="/#" style={{ textDecoration: 'none' }}>
            <MenuItem
              leftIcon={<FontIcon className="fa fa-sign-out" />}
            >
              Sair
            </MenuItem>
          </a>
        </Drawer>
      </div>
    )
  }
}

export default Menu
