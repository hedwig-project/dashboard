import Checkbox from 'material-ui/Checkbox'
import RaisedButton from 'material-ui/RaisedButton'
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

  componentWillUnmount() {
    this.props.confirmationAwait(this.props.module.serial, false)
  }

  updateCheck = () => {
    this.setState(oldState => ({ isChecked: !oldState.isChecked }))
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
            confirmationAwait(module.serial, true)
          }
        })
    }

    /* eslint-disable max-len */
    return (
      <SettingsSection>
        <Header>Teste de auto reset</Header>
        Emite um sinal que permite simular um travamento do módulo e verificar se o circuito antitravamento age corretamente.
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
        <ConfirmationSnackbar
          shouldOpen={confirmationArrived && confirmationAwaited}
          message={'Teste de auto reset realizado!'}
          onClose={() => confirmationClear(module.serial)}
        />
      </SettingsSection>
    )
  }
}

ModuleRestart.propTypes = {
  confirmationArrived: PropTypes.bool,
  confirmationAwaited: PropTypes.bool,
  confirmationAwait: PropTypes.func.isRequired,
  confirmationClear: PropTypes.func.isRequired,
  emitConfiguration: PropTypes.func.isRequired,
  module: PropTypes.object,
  updateModule: PropTypes.func.isRequired,
}

ModuleRestart.defaultProps = {
  confirmationArrived: false,
  confirmationAwaited: false,
  module: null,
}

export default ModuleRestart
