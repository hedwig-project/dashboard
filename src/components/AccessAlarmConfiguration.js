import React, { Component, PropTypes } from 'react'
import styled from 'styled-components'
import FontIcon from 'material-ui/FontIcon'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import Toggle from 'material-ui/Toggle'

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: #00BCD4;
  padding: 20px;
`

const Title = styled.div`
  display: flex;
  align-items: center;
  color: #FFFFFF;
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  padding: 10px 0;
`

const AlarmConfigurationField = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  padding: 15px 0 0 44px;
`

const SubmitButton = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  flex-grow: 1;
  padding: 10px 0;
`

class AccessAlarmConfiguration extends Component {
  iconStyle = {
    fontSize: '38px',
    lineHeight: '24px',
    marginRight: '10px',
    verticalAlign: 'top',
  }

  render() {
    const { alarm, alarmConfigurationSubmit, handleSubmit } = this.props
    return (
      <Wrapper onSubmit={handleSubmit(alarmConfigurationSubmit)}>
        <Title>
          <FontIcon
            className="fa fa-clock-o"
            color={'#FFFFFF'}
            style={this.iconStyle}
          />
          Ativar/desativar alarme
        </Title>
        <AlarmConfigurationField>
          <Toggle
            name={'activate'}
            label={'Ativar alarme'}
            defaultToggled={alarm}
            labelStyle={{ width: 'auto', marginRight: '10px', color: '#006064' }}
            thumbSwitchedStyle={{ backgroundColor: '#00838F' }}
            trackSwitchedStyle={{ backgroundColor: '#0097A7' }}
          />
        </AlarmConfigurationField>
        <AlarmConfigurationField>
          <TextField
            name={'minutes'}
            floatingLabelFixed
            floatingLabelStyle={{ color: '#00838F' }}
            floatingLabelText={'Tempo de permanência (minutos)'}
            floatingLabelFocusStyle={{ color: '#FFFFFF' }}
            underlineStyle={{ borderColor: '#00838F' }}
            underlineFocusStyle={{ borderColor: '#FFFFFF' }}
            style={{ width: '60%', marginTop: '-14px' }}
          />
        </AlarmConfigurationField>
        <SubmitButton>
          <RaisedButton label="Enviar" style={{ color: '#00838F' }} type="submit" />
        </SubmitButton>
      </Wrapper>
    )
  }
}

AccessAlarmConfiguration.propTypes = {
  alarm: PropTypes.bool,
  alarmConfigurationSubmit: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}

AccessAlarmConfiguration.defaultProps = {
  alarm: false,
}

export default AccessAlarmConfiguration
