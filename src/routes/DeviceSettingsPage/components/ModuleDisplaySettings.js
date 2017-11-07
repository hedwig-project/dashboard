import Checkbox from 'material-ui/Checkbox'
import MenuItem from 'material-ui/MenuItem'
import RaisedButton from 'material-ui/RaisedButton'
import SelectField from 'material-ui/SelectField'
import React, { PropTypes } from 'react'
import styled from 'styled-components'
import fonts from '@consts/fonts'
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

  handleChange = (event, index, type) => {
    this.setState(oldState => ({ backlight: oldState.backlight, type }))
  }

  updateCheck = () => {
    this.setState(oldState => ({ backlight: !oldState.backlight, type: oldState.type }))
  }

  render() {
    const {
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
            onChange={this.handleChange}
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
          <Checkbox
            label="Ativar luz de fundo"
            checked={this.state.backlight}
            onCheck={this.updateCheck}
          />
        </OptionsWrapper>
        <ButtonWrapper>
          <RaisedButton
            onClick={onClick}
            label="Atualizar"
            primary
            style={{ margin: '15px 0' }}
          />
        </ButtonWrapper>
      </SettingsSection>
    )
  }
}

ModuleDisplaySettings.propTypes = {
  emitConfiguration: PropTypes.func.isRequired,
  module: PropTypes.object,
  updateModule: PropTypes.func.isRequired,
}

ModuleDisplaySettings.defaultProps = {
  module: null,
}

export default ModuleDisplaySettings
