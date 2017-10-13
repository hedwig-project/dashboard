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
  }

  handleChange = () => {
    this.setState({ open: !this.state.open })
  }

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
            onTouchTap={() => redirect('/hello')}
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
          <MenuItem
            leftIcon={<FontIcon className="fa fa-lock" />}
            onTouchTap={() => redirect('/access')}
          >
            Acesso
          </MenuItem>
          <MenuItem
            leftIcon={<FontIcon className="fa fa-tint" />}
            onTouchTap={() => redirect('/aquarium')}
          >
            Aquário
          </MenuItem>
          <MenuItem
            leftIcon={<FontIcon className="fa fa-square" />}
            onTouchTap={() => redirect('/hallway')}
          >
            Corredor
          </MenuItem>
          <MenuItem
            leftIcon={<FontIcon className="fa fa-cutlery" />}
            onTouchTap={() => redirect('/kitchen')}
          >
            Cozinha
          </MenuItem>
          <MenuItem
            leftIcon={<FontIcon className="fa fa-shirtsinbulk" />}
            onTouchTap={() => redirect('/laundry')}
          >
            Lavanderia
          </MenuItem>
          <MenuItem
            leftIcon={<FontIcon className="fa fa-television" />}
            onTouchTap={() => redirect('/livingroom')}
          >
            Sala
          </MenuItem>
          <MenuItem
            leftIcon={<FontIcon className="fa fa-plus-circle" />}
            onTouchTap={() => redirect('#')}
          >
            Adicionar módulo...
          </MenuItem>
          <Divider />
          <MenuItem
            leftIcon={<FontIcon className="fa fa-cog" />}
            onTouchTap={() => redirect('#')}
          >
            Configurações
          </MenuItem>
          <MenuItem
            leftIcon={<FontIcon className="fa fa-sign-out" />}
            onTouchTap={logout}
          >
            Sair
          </MenuItem>
        </Drawer>
      </div>
    )
  }
}

export default withNavigation(Menu)
