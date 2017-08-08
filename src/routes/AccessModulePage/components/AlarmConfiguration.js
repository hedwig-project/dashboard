import React, {
  Component,
  PropTypes,
} from 'react'
import styled from 'styled-components'
import { Field } from 'redux-form'
import { TextField, Toggle } from 'redux-form-material-ui'
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

const AlarmConfigurationField = styled.div`
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

class AlarmConfiguration extends Component {
  iconStyle = {
    fontSize: '38px',
    lineHeight: '24px',
    marginRight: '10px',
    verticalAlign: 'top',
  }

  render() {
    const { alarm, alarmConfigurationSubmit, handleSubmit } = this.props
    return (
      <Form onSubmit={handleSubmit(alarmConfigurationSubmit)}>
        <Title>
          <FontIcon
            className="fa fa-clock-o"
            color={'#006064'}
            style={this.iconStyle}
          />
          Configurar alarme
        </Title>
        <AlarmConfigurationField>
          <Field
            component={Toggle}
            name={'activate'}
            label={'Ativar alarme'}
            defaultToggled={alarm}
            labelStyle={{ width: 'auto', marginRight: '10px' }}
            thumbSwitchedStyle={{ backgroundColor: '#00838F' }}
          />
        </AlarmConfigurationField>
        <AlarmConfigurationField>
          <Field
            component={TextField}
            name={'minutes'}
            floatingLabelFixed
            floatingLabelText={'Tempo de permanência (minutos)'}
            floatingLabelFocusStyle={{ color: '#00838F' }}
            underlineFocusStyle={{ borderColor: '#00838F' }}
            style={{ width: '100%', marginTop: '-14px' }}
          />
        </AlarmConfigurationField>
        <SubmitButton>
          <RaisedButton label="Enviar" style={{ color: '#00838F' }} type="submit" />
        </SubmitButton>
      </Form>
    )
  }
}

AlarmConfiguration.propTypes = {
  alarm: PropTypes.bool,
  alarmConfigurationSubmit: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}

AlarmConfiguration.defaultProps = {
  alarm: false,
}

export default AlarmConfiguration
