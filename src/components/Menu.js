import React from 'react'
import PropTypes from 'prop-types'
import AppBar from 'material-ui/AppBar'
import Divider from 'material-ui/Divider'
import Drawer from 'material-ui/Drawer'
import FontIcon from 'material-ui/FontIcon'
import MenuItem from 'material-ui/MenuItem'
import ConnectionStatus from '@components/ConnectionStatus'
import { getModuleLocationClass } from '@helpers/modules'
import withNavigation from '@hocs/withNavigation'

/* eslint-disable arrow-body-style */
class Menu extends React.Component {
  static propTypes = {
    connected: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired,
    goTo: PropTypes.func.isRequired,
    modules: PropTypes.object.isRequired,
    morpheus: PropTypes.object.isRequired,
    morpheusConnected: PropTypes.object.isRequired,
  }

  state = {
    open: false,
  }

  handleChange = () => {
    this.setState({ open: !this.state.open })
  }

  render() {
    const {
      connected,
      logout,
      goTo,
      modules,
      morpheus,
      morpheusConnected,
    } = this.props

    const redirect = (page) => {
      this.handleChange()
      goTo(page)
    }

    const renderModuleItems = (data) => {
      const moduleIds = Object.keys(data)

      return moduleIds.map((key) => {
        return (
          <MenuItem
            key={key}
            leftIcon={<FontIcon className={getModuleLocationClass(data[key].location)} />}
            onTouchTap={() => redirect(`/module/${key}`)}
          >
            {data[key].name}
          </MenuItem>
        )
      })
    }

    const isMorpheusConnected = (registered, online) => {
      const onlineSerials = Object.keys(online)

      return Object.keys(registered)
        .reduce((result, serial) => onlineSerials.includes(serial) && result, true)
    }

    return (
      <div>
        <AppBar
          title="Hedwig"
          onLeftIconButtonTouchTap={this.handleChange}
          iconElementRight={
            <ConnectionStatus
              connected={connected}
              morpheusConnected={isMorpheusConnected(morpheus, morpheusConnected)}
              onClick={() => goTo('/status')}
            />
          }
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
          {renderModuleItems(modules)}
          <MenuItem
            leftIcon={<FontIcon className="fa fa-plus-circle" />}
            onTouchTap={() => redirect('/add-device')}
          >
            Adicionar dispositivo
          </MenuItem>
          <MenuItem
            leftIcon={<FontIcon className="fa fa-sliders" />}
            onTouchTap={() => redirect('/device-settings')}
          >
            Configurar dispositivo
          </MenuItem>
          <Divider />
          <MenuItem
            leftIcon={<FontIcon className="fa fa-cog" />}
            onTouchTap={() => redirect('/user-settings')}
          >
            Configurações gerais
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
