import Divider from 'material-ui/Divider'
import RaisedButton from 'material-ui/RaisedButton'
import React, { PropTypes } from 'react'
import { Field } from 'redux-form'
import { TextField } from 'redux-form-material-ui'
import styled from 'styled-components'
import fonts from '@consts/fonts'
import { encodeModuleConfigurationMessage } from '@helpers/morpheus'

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
  render() {
    const {
      emitConfiguration,
      module,
      handleSubmit,
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
    }

    return (
      <Wrapper isAccessModule={module && module.location === 'ACCESS'}>
        <SettingsSection>
          <Header>Senha do módulo de acesso</Header>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Field
              name="gate_password"
              floatingLabelText="Senha atual"
              floatingLabelStyle={{ top: '18px' }}
              errorStyle={{ bottom: '8px' }}
              inputStyle={{ marginTop: '2px' }}
              component={TextField}
              style={{ width: '100%', height: '52px' }}
              type="password"
            />
            <Field
              name="gate_new_password"
              floatingLabelText="Senha nova"
              floatingLabelStyle={{ top: '18px' }}
              errorStyle={{ bottom: '8px' }}
              inputStyle={{ marginTop: '2px' }}
              component={TextField}
              style={{ width: '100%', height: '52px' }}
              type="password"
            />
            <ButtonWrapper>
              <RaisedButton
                label="Atualizar"
                primary
                style={{ margin: '15px 0' }}
                type="submit"
              />
            </ButtonWrapper>
          </form>
        </SettingsSection>
        <Divider />
      </Wrapper>
    )
  }
}

ModuleGatePasswordConfiguration.propTypes = {
  emitConfiguration: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  module: PropTypes.object,
}

ModuleGatePasswordConfiguration.defaultProps = {
  module: null,
}

export default ModuleGatePasswordConfiguration
