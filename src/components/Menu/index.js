import React from 'react'
import PropTypes from 'prop-types'
import AppBar from 'material-ui/AppBar'
import Divider from 'material-ui/Divider'
import Drawer from 'material-ui/Drawer'
import FontIcon from 'material-ui/FontIcon'
import MenuItem from 'material-ui/MenuItem'
import withNavigation from '@hocs/withNavigation'

/* eslint-disable arrow-body-style */
class Menu extends React.Component {
  static propTypes = {
    logout: PropTypes.func.isRequired,
    goTo: PropTypes.func.isRequired,
  }

  state = {
    open: false,
  };

  handleChange = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const {
      logout,
      goTo,
    } = this.props

    const redirect = (page) => {
      this.handleChange()
      goTo(page)
    }

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
          <div onTouchTap={() => redirect('/access')}>
            <MenuItem
              leftIcon={<FontIcon className="fa fa-lock" />}
            >
              Acesso
            </MenuItem>
          </div>
          <div onTouchTap={() => redirect('/aquarium')}>
            <MenuItem
              leftIcon={<FontIcon className="fa fa-tint" />}
            >
              Aquário
            </MenuItem>
          </div>
          <div onTouchTap={() => redirect('/hallway')}>
            <MenuItem
              leftIcon={<FontIcon className="fa fa-square" />}
            >
              Corredor
            </MenuItem>
          </div>
          <div onTouchTap={() => redirect('/kitchen')}>
            <MenuItem
              leftIcon={<FontIcon className="fa fa-cutlery" />}
            >
              Cozinha
            </MenuItem>
          </div>
          <div onTouchTap={() => redirect('/laundry')}>
            <MenuItem
              leftIcon={<FontIcon className="fa fa-shirtsinbulk" />}
            >
              Lavanderia
            </MenuItem>
          </div>
          <div onTouchTap={() => redirect('/livingroom')}>
            <MenuItem
              leftIcon={<FontIcon className="fa fa-television" />}
            >
              Sala
            </MenuItem>
          </div>
          <div onTouchTap={() => redirect('#')}>
            <MenuItem
              leftIcon={<FontIcon className="fa fa-plus-circle" />}
            >
              Adicionar módulo...
            </MenuItem>
          </div>
          <Divider />
          <div onTouchTap={() => redirect('#')}>
            <MenuItem
              leftIcon={<FontIcon className="fa fa-cog" />}
            >
              Configurações
            </MenuItem>
          </div>
          <div onTouchTap={logout}>
            <MenuItem
              leftIcon={<FontIcon className="fa fa-sign-out" />}
            >
              Sair
            </MenuItem>
          </div>
        </Drawer>
      </div>
    )
  }
}

export default withNavigation(Menu)
