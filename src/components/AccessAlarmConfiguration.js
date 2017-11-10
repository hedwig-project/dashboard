import React, { Component, PropTypes } from 'react'
import styled from 'styled-components'
import FontIcon from 'material-ui/FontIcon'
import MenuItem from 'material-ui/MenuItem'
import RaisedButton from 'material-ui/RaisedButton'
import SelectField from 'material-ui/SelectField'
import Toggle from 'material-ui/Toggle'
import { encodeActionMessage } from '@helpers/morpheus'

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

  constructor(props) {
    super(props)
    this.state = {
      alarm: 0,
      alarmTime: null,
    }
  }

  handleToggle = (event, value) =>
    this.setState(oldState => ({ alarm: value ? 1 : 0, alarmTime: oldState.alarmTime }))

  handleTimeChange = (event, index, value) =>
    this.setState(oldState => ({ alarm: oldState.alarm, alarmTime: value }))

  renderTimeOptions = () => {
    const options = []
    for (let i = 1; i <= 24; i += 1) {
      options[i] = i * 30
    }
    return options.map(minutes =>
      <MenuItem
        key={minutes}
        value={minutes}
        primaryText={`${minutes / 60} hora${minutes > 60 ? 's' : ''} (${minutes} minutos)`}
      />)
  }

  sendConfiguration = () => {
    this.props.send(
      this.props.morpheusId,
      encodeActionMessage(
        this.props.moduleId,
        'alarm_config',
        { alarme: this.state.alarm, alarme_tempo: this.state.alarmTime }),
    )
  }

  render() {
    return (
      <Wrapper>
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
            disabled={this.props.alarm === null}
            name={'activate'}
            label={'Ativar alarme'}
            labelStyle={{ width: 'auto', marginRight: '10px', color: '#FFFFFF' }}
            onToggle={this.handleToggle}
            thumbSwitchedStyle={{ backgroundColor: '#00838F' }}
            toggled={this.state.alarm === 1}
            trackSwitchedStyle={{ backgroundColor: '#0097A7' }}
          />
        </AlarmConfigurationField>
        <AlarmConfigurationField>
          <SelectField
            disabled={this.props.alarm === null}
            floatingLabelFixed
            floatingLabelStyle={{ color: '#FFFFFF' }}
            floatingLabelText="Tempo de permanência"
            floatingLabelFocusStyle={{ color: '#00838F' }}
            hintText="ex.: 6 horas"
            style={{ width: '40%' }}
            underlineStyle={{ borderColor: '#FFFFFF' }}
            underlineFocusStyle={{ borderColor: '#00838F' }}
            value={this.state.alarmTime}
            onChange={this.handleTimeChange}
          >
            {
              this.renderTimeOptions()
            }
          </SelectField>
        </AlarmConfigurationField>
        <SubmitButton>
          <RaisedButton
            disabled={this.props.alarm === null}
            label="Enviar"
            style={{ color: '#00838F' }}
            onClick={this.sendConfiguration}
          />
        </SubmitButton>
      </Wrapper>
    )
  }
}

AccessAlarmConfiguration.propTypes = {
  moduleId: PropTypes.string.isRequired,
  morpheusId: PropTypes.string.isRequired,
  alarm: PropTypes.number,
  send: PropTypes.func.isRequired,
}

AccessAlarmConfiguration.defaultProps = {
  alarm: null,
}

AccessAlarmConfiguration.defaultProps = {}

export default AccessAlarmConfiguration
