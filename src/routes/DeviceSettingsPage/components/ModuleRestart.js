import RaisedButton from 'material-ui/RaisedButton'
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

class ModuleRestart extends React.Component {
  render() {
    const {
      emitConfiguration,
      module,
    } = this.props

    return (
      <SettingsSection>
        <Header>Reiniciar módulo</Header>
        Reiniciar software do módulo.
        <ButtonWrapper>
          <RaisedButton
            onClick={
              () => emitConfiguration(
                module.morpheus.serial,
                encodeModuleConfigurationMessage(
                  module,
                  'sw_reset',
                  { sw_reset: 1 },
                ),
              )
            }
            label="Reiniciar"
            primary
            style={{ margin: '15px 0' }}
          />
        </ButtonWrapper>
      </SettingsSection>
    )
  }
}

ModuleRestart.propTypes = {
  emitConfiguration: PropTypes.func.isRequired,
  module: PropTypes.object,
}

ModuleRestart.defaultProps = {
  module: null,
}

export default ModuleRestart
