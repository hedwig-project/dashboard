import React, {
  Component,
  PropTypes,
} from 'react'
import styled from 'styled-components'
import { Field } from 'redux-form'
import { TextField } from 'redux-form-material-ui'
import FontIcon from 'material-ui/FontIcon'
import RaisedButton from 'material-ui/RaisedButton'

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  background-color: #E0F7FA;
  color: #006064;
  padding: 40px 20px;
`

const Title = styled.div`
  flex: 1 1 300px;
  display: flex;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
`

const GatePasswordConfigurationField = styled.div`
  flex: 1 1 250px;
  display: flex;
  align-items: center;
  font-family: 'Roboto', sans-serif;
`

const SubmitButton = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

class GatePasswordConfiguration extends Component {
  iconStyle = {
    fontSize: '38px',
    lineHeight: '24px',
    marginRight: '10px',
    verticalAlign: 'top',
  }

  render() {
    const { gatePasswordConfigurationSubmit, handleSubmit } = this.props
    return (
      <Form onSubmit={handleSubmit(gatePasswordConfigurationSubmit)}>
        <Title>
          <FontIcon
            className="fa fa-clock-o"
            color={'#006064'}
            style={this.iconStyle}
          />
          Configurar senha do portão
        </Title>
        <GatePasswordConfigurationField>
          <Field
            component={TextField}
            name={'oldPassword'}
            type="password"
            floatingLabelFixed
            floatingLabelText={'Senha atual'}
            floatingLabelFocusStyle={{ color: '#00838F' }}
            underlineFocusStyle={{ borderColor: '#00838F' }}
            style={{ width: '90%', marginTop: '-14px' }}
          />
        </GatePasswordConfigurationField>
        <GatePasswordConfigurationField>
          <Field
            component={TextField}
            name={'newPassword'}
            type="password"
            floatingLabelFixed
            floatingLabelText={'Nova senha'}
            floatingLabelFocusStyle={{ color: '#00838F' }}
            underlineFocusStyle={{ borderColor: '#00838F' }}
            style={{ width: '90%', marginTop: '-14px' }}
          />
        </GatePasswordConfigurationField>
        <GatePasswordConfigurationField>
          <Field
            component={TextField}
            name={'newPasswordConfirmation'}
            type="password"
            floatingLabelFixed
            floatingLabelText={'Confirme a nova senha'}
            floatingLabelFocusStyle={{ color: '#00838F' }}
            underlineFocusStyle={{ borderColor: '#00838F' }}
            style={{ width: '90%', marginTop: '-14px' }}
          />
        </GatePasswordConfigurationField>
        <SubmitButton>
          <RaisedButton label="Enviar" style={{ color: '#00838F' }} type="submit" />
        </SubmitButton>
      </Form>
    )
  }
}

GatePasswordConfiguration.propTypes = {
  gatePasswordConfigurationSubmit: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}

export default GatePasswordConfiguration
