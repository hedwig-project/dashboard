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

const LightConfigurationField = styled.div`
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

class LightConfiguration extends Component {
  iconStyle = {
    fontSize: '38px',
    lineHeight: '24px',
    marginRight: '10px',
    verticalAlign: 'top',
  }

  render() {
    const { lightConfigurationSubmit, handleSubmit } = this.props
    return (
      <Form onSubmit={handleSubmit(lightConfigurationSubmit)}>
        <Title>
          <FontIcon
            className="fa fa-lightbulb-o"
            color={'#006064'}
            style={this.iconStyle}
          />
          Configurar luzes
        </Title>
        <LightConfigurationField>
          <Field
            component={TextField}
            name={'initialTime'}
            floatingLabelFixed
            floatingLabelText={'Hora de início de acendimento'}
            floatingLabelFocusStyle={{ color: '#00838F' }}
            underlineFocusStyle={{ borderColor: '#00838F' }}
            style={{ width: '90%', marginTop: '-14px' }}
          />
        </LightConfigurationField>
        <LightConfigurationField>
          <Field
            component={TextField}
            name={'finalTime'}
            floatingLabelFixed
            floatingLabelText={'Hora de fim de acendimento'}
            floatingLabelFocusStyle={{ color: '#00838F' }}
            underlineFocusStyle={{ borderColor: '#00838F' }}
            style={{ width: '90%', marginTop: '-14px' }}
          />
        </LightConfigurationField>
        <LightConfigurationField>
          <Field
            component={TextField}
            name={'keepOn'}
            floatingLabelFixed
            floatingLabelText={'Tempo de permanência acesas (minutos)'}
            floatingLabelFocusStyle={{ color: '#00838F' }}
            underlineFocusStyle={{ borderColor: '#00838F' }}
            style={{ width: '90%', marginTop: '-14px' }}
          />
        </LightConfigurationField>
        <SubmitButton>
          <RaisedButton label="Enviar" style={{ color: '#00838F' }} type="submit" />
        </SubmitButton>
      </Form>
    )
  }
}

LightConfiguration.propTypes = {
  lightConfigurationSubmit: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}

export default LightConfiguration
