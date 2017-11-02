import Checkbox from 'material-ui/Checkbox'
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

const OptionsWrapper = styled.div`
  padding: 20px 0 10px 0;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`

class ModuleRestart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isChecked: this.props.module.autoResetTest,
    }
  }

  updateCheck = () => {
    this.setState(oldState => ({ isChecked: !oldState.isChecked }))
  }

  render() {
    const {
      emitConfiguration,
      module,
      updateModule,
    } = this.props

    const onClick = () => {
      const data = { ...module, autoResetTest: this.state.isChecked }
      updateModule(data)
        .then((success) => {
          if (success) {
            emitConfiguration(
              module.morpheus.serial,
              encodeModuleConfigurationMessage(
                module,
                'autoreset_test',
                { autoreset_test: this.state.isChecked },
              ),
            )
          }
        })
    }

    return (
      <SettingsSection>
        <Header>Teste de auto reset</Header>
        Emite um sinal que permite monitorar o funcionamento correto do módulo
        e ativa um circuito antitravamento.
        <OptionsWrapper>
          <Checkbox
            label="Ativar teste de auto reset"
            checked={this.state.isChecked}
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

ModuleRestart.propTypes = {
  emitConfiguration: PropTypes.func.isRequired,
  module: PropTypes.object,
  updateModule: PropTypes.func.isRequired,
}

ModuleRestart.defaultProps = {
  module: null,
}

export default ModuleRestart
