import RaisedButton from 'material-ui/RaisedButton'
import moment from 'moment'
import React, { PropTypes } from 'react'
import styled from 'styled-components'
import fonts from '@consts/fonts'
import ConfirmationSnackbar from '@components/ConfirmationSnackbar'
import { encodeModuleConfigurationMessage } from '@helpers/morpheus'
import { timeConfirmation } from '@modules/confirmation/actions'

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
      confirmation,
      dispatch,
      emitConfiguration,
      module,
    } = this.props

    return (
      <SettingsSection>
        <Header>Sincronizar hora</Header>
        Sincronizar relógio do módulo.
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
        <ConfirmationSnackbar
          shouldOpen={confirmation}
          message={'Hora sincronizada com sucesso!'}
          onClose={() => dispatch(timeConfirmation(module.serial, false))}
        />
      </SettingsSection>
    )
  }
}

ModuleTimeSettings.propTypes = {
  confirmation: PropTypes.bool,
  dispatch: PropTypes.func.isRequired,
  emitConfiguration: PropTypes.func.isRequired,
  module: PropTypes.object,
}

ModuleTimeSettings.defaultProps = {
  confirmation: false,
  module: null,
}

export default ModuleTimeSettings
