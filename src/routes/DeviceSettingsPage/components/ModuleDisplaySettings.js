import MenuItem from 'material-ui/MenuItem'
import RaisedButton from 'material-ui/RaisedButton'
import SelectField from 'material-ui/SelectField'
import React, { PropTypes } from 'react'
import styled from 'styled-components'
import fonts from '@consts/fonts'
import ConfirmationSnackbar from '@components/ConfirmationSnackbar'
import { encodeModuleConfigurationMessage } from '@helpers/morpheus'

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

class ModuleDisplaySettings extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      backlight: this.props.module.components.display.backlight,
      type: this.props.module.components.display.type,
    }
  }

  componentWillUnmount() {
    this.props.confirmationAwait(this.props.module.serial, false)
  }

  handleTypeChange = (event, index, type) => {
    this.setState(oldState => ({ backlight: oldState.backlight, type }))
  }

  handleBacklightChange = (event, index, backlight) => {
    this.setState(oldState => ({ type: oldState.type, backlight }))
  }

  render() {
    const {
      confirmationArrived,
      confirmationAwaited,
      confirmationAwait,
      confirmationClear,
      emitConfiguration,
      module,
      updateModule,
    } = this.props

    const onClick = () => {
      const data = { ...module }
      data.components.display = {
        backlight: this.state.backlight,
        type: this.state.type,
      }
      updateModule(data)
        .then((success) => {
          if (success) {
            emitConfiguration(
              module.morpheus.serial,
              encodeModuleConfigurationMessage(
                module,
                'display_config',
                { displaytype: this.state.type, backlight: this.state.backlight },
              ),
            )
            confirmationAwait(module.serial, true)
          }
        })
    }

    return (
      <SettingsSection>
        <Header>Configurações de display</Header>
        <OptionsWrapper>
          <SelectField
            floatingLabelText="Tipo de display"
            value={this.state.type}
            onChange={this.handleTypeChange}
            style={{ width: '100%' }}
          >
            <MenuItem
              value={'1'}
              key={'1'}
              primaryText="Todas as informações"
            />
            <MenuItem
              value={'2'}
              key={'2'}
              primaryText="Hora, temperatura e umidade"
            />
            <MenuItem
              value={'3'}
              key={'3'}
              primaryText="Apenas hora"
            />
          </SelectField>
        </OptionsWrapper>
        <OptionsWrapper>
          <SelectField
            floatingLabelText="Luz de fundo"
            value={this.state.backlight}
            onChange={this.handleBacklightChange}
            style={{ width: '100%' }}
          >
            <MenuItem
              value={'0'}
              key={'0'}
              primaryText="Desligada"
            />
            <MenuItem
              value={'1'}
              key={'1'}
              primaryText="Ligada"
            />
            <MenuItem
              value={'2'}
              key={'2'}
              primaryText="Automática"
            />
          </SelectField>
        </OptionsWrapper>
        <ButtonWrapper>
          <RaisedButton
            onClick={onClick}
            label="Atualizar"
            primary
            style={{ margin: '15px 0' }}
          />
        </ButtonWrapper>
        <ConfirmationSnackbar
          shouldOpen={confirmationArrived && confirmationAwaited}
          message={'Configurações de display atualizadas!'}
          onClose={() => confirmationClear(module.serial)}
        />
      </SettingsSection>
    )
  }
}

ModuleDisplaySettings.propTypes = {
  confirmationArrived: PropTypes.bool,
  confirmationAwaited: PropTypes.bool,
  confirmationAwait: PropTypes.func.isRequired,
  confirmationClear: PropTypes.func.isRequired,
  emitConfiguration: PropTypes.func.isRequired,
  module: PropTypes.object,
  updateModule: PropTypes.func.isRequired,
}

ModuleDisplaySettings.defaultProps = {
  confirmationArrived: false,
  confirmationAwaited: false,
  module: null,
}

export default ModuleDisplaySettings
