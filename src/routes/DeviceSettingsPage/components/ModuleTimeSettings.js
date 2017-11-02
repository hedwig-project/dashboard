import RaisedButton from 'material-ui/RaisedButton'
import moment from 'moment'
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

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`

class ModuleTimeSettings extends React.Component {
  render() {
    const {
      emitConfiguration,
      module,
    } = this.props

    return (
      <SettingsSection>
        <Header>Sincronizar Hora</Header>
        <ButtonWrapper>
          <RaisedButton
            onClick={
              () => emitConfiguration(
                module.morpheus.serial,
                encodeModuleConfigurationMessage(
                  module,
                  'time_config',
                  { updated_ntp: moment().unix() },
                ),
              )
            }
            label="Sincronizar"
            primary
            style={{ margin: '15px 0' }}
          />
        </ButtonWrapper>
      </SettingsSection>
    )
  }
}

ModuleTimeSettings.propTypes = {
  emitConfiguration: PropTypes.func.isRequired,
  module: PropTypes.object,
}

ModuleTimeSettings.defaultProps = {
  module: null,
}

export default ModuleTimeSettings
