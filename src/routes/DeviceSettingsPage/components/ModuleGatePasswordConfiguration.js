import Divider from 'material-ui/Divider'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import React, { PropTypes } from 'react'
import styled from 'styled-components'
import fonts from '@consts/fonts'
import { encodeModuleConfigurationMessage } from '@helpers/morpheus'
import ConfirmationSnackbar from '@components/ConfirmationSnackbar'

const Wrapper = styled.div`
  display: ${props => props.isAccessModule ? 'block' : 'none'};
  margin-top: 20px;
`

const SettingsSection = styled.section`
  padding: 20px 0;
`

const Header = styled.h3`
  font-size: ${fonts.medium};
  text-align: center;
  font-weight: normal;
  margin-bottom: 10px;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`

class ModuleGatePasswordConfiguration extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      gate_password: '',
      gate_new_password: '',
    }
  }

  componentWillUnmount() {
    this.props.confirmationAwait(this.props.module.serial, false)
  }

  onChangePassword = (event, value) =>
    this.setState(oldState => ({ ...oldState, gate_password: value }))

  onChangeNewPassword = (event, value) =>
    this.setState(oldState => ({ ...oldState, gate_new_password: value }))

  render() {
    const {
      confirmationArrived,
      confirmationAwaited,
      confirmationAwait,
      confirmationClear,
      emitConfiguration,
      module,
    } = this.props

    const onSubmit = (values) => {
      emitConfiguration(
        module.morpheus.serial,
        encodeModuleConfigurationMessage(
          module,
          'password_config',
          { old_password: values.gate_password, new_password: values.gate_new_password },
        ),
      )
      confirmationAwait(module.serial, true)
    }

    return (
      <Wrapper isAccessModule={module && module.location === 'ACCESS'}>
        <SettingsSection>
          <Header>Senha do módulo de acesso</Header>
          <form>
            <TextField
              name="gate_password"
              floatingLabelText="Senha atual"
              floatingLabelStyle={{ top: '18px' }}
              errorStyle={{ bottom: '8px' }}
              inputStyle={{ marginTop: '2px' }}
              style={{ width: '100%', height: '52px' }}
              type="password"
              onChange={this.onChangePassword}
              value={this.state.gate_password}
            />
            <TextField
              name="gate_new_password"
              floatingLabelText="Senha nova"
              floatingLabelStyle={{ top: '18px' }}
              errorStyle={{ bottom: '8px' }}
              inputStyle={{ marginTop: '2px' }}
              style={{ width: '100%', height: '52px' }}
              type="password"
              onChange={this.onChangeNewPassword}
              value={this.state.gate_new_password}
            />
            <ButtonWrapper>
              <RaisedButton
                label="Atualizar"
                primary
                style={{ margin: '15px 0' }}
                onClick={() => onSubmit(this.state)}
              />
            </ButtonWrapper>
          </form>
        </SettingsSection>
        <Divider />
        <ConfirmationSnackbar
          shouldOpen={confirmationArrived && confirmationAwaited}
          message={'Senha do portão atualizada!'}
          onClose={() => confirmationClear(module.serial)}
        />
      </Wrapper>
    )
  }
}

ModuleGatePasswordConfiguration.propTypes = {
  confirmationArrived: PropTypes.bool,
  confirmationAwaited: PropTypes.bool,
  confirmationAwait: PropTypes.func.isRequired,
  confirmationClear: PropTypes.func.isRequired,
  emitConfiguration: PropTypes.func.isRequired,
  module: PropTypes.object,
}

ModuleGatePasswordConfiguration.defaultProps = {
  confirmationArrived: false,
  confirmationAwaited: false,
  module: null,
}

export default ModuleGatePasswordConfiguration
