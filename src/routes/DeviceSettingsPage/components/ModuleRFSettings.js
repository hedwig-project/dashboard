import MenuItem from 'material-ui/MenuItem'
import RaisedButton from 'material-ui/RaisedButton'
import SelectField from 'material-ui/SelectField'
import React, { PropTypes } from 'react'
import styled from 'styled-components'
import fonts from '@consts/fonts'
import ConfirmationSnackbar from '@components/ConfirmationSnackbar'
import { encodeModuleConfigurationMessage } from '@helpers/morpheus'
import { rfConfirmation } from '@modules/confirmation/actions'

const SettingsSection = styled.section`
  padding: 20px 0;
`

const Header = styled.h3`
  font-size: ${fonts.medium};
  text-align: center;
  font-weight: normal;
  margin-bottom: 10px;
`

const OptionsWrapper = styled.div`
  padding: 10px 0;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`

class ModuleRFSettings extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      rf: 'sensor_abre',
    }
  }

  handleChange = (event, index, rf) => {
    this.setState({ rf })
  }

  render() {
    const {
      confirmation,
      dispatch,
      emitConfiguration,
      module,
    } = this.props

    const onClick = (action) => {
      const payload = {}
      payload[this.state.rf] = action
      emitConfiguration(
        module.morpheus.serial,
        encodeModuleConfigurationMessage(
          module,
          'rf_config',
          payload,
        ),
      )
    }

    return (
      <SettingsSection>
        <Header>Configurações de radiofrequência (RF)</Header>
        <OptionsWrapper>
          <SelectField
            floatingLabelText="Ação"
            value={this.state.rf}
            onChange={this.handleChange}
            style={{ width: '100%' }}
          >
            <MenuItem
              value={'sensor_abre'}
              key={'sensor_abre'}
              primaryText="Sensor de abertura - abre"
            />
            <MenuItem
              value={'sensor_fecha'}
              key={'sensor_fecha'}
              primaryText="Sensor de abertura - fecha"
            />
            <MenuItem
              value={'rele1_rf'}
              key={'rele1_rf'}
              primaryText="Relé 1"
            />
            <MenuItem
              value={'rele2_rf'}
              key={'rele2_rf'}
              primaryText="Relé 2"
            />
          </SelectField>
        </OptionsWrapper>
        <ButtonWrapper>
          <RaisedButton
            onClick={() => onClick('store')}
            label="Adicionar RF"
            primary
            style={{ margin: '15px 10px' }}
          />
          <RaisedButton
            onClick={() => onClick('clear')}
            label="Remover RF"
            secondary
            style={{ margin: '15px 10px' }}
          />
        </ButtonWrapper>
        <ConfirmationSnackbar
          shouldOpen={confirmation}
          message={'Configuração de RF efetuada com sucesso!'}
          onClose={() => dispatch(rfConfirmation(module.serial, false))}
        />
      </SettingsSection>
    )
  }
}

ModuleRFSettings.propTypes = {
  confirmation: PropTypes.bool,
  dispatch: PropTypes.func.isRequired,
  emitConfiguration: PropTypes.func.isRequired,
  module: PropTypes.object,
}

ModuleRFSettings.defaultProps = {
  confirmation: false,
  module: null,
}

export default ModuleRFSettings
