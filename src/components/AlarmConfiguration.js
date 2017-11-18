import React, { Component, PropTypes } from 'react'
import styled from 'styled-components'
import FontIcon from 'material-ui/FontIcon'
import MenuItem from 'material-ui/MenuItem'
import RaisedButton from 'material-ui/RaisedButton'
import SelectField from 'material-ui/SelectField'
import Toggle from 'material-ui/Toggle'
import { encodeModuleConfigurationMessage } from '@helpers/morpheus'

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: ${props => props.backgroundColor};
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

class AlarmConfiguration extends Component {
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
    const optionsSeconds = [0, 15, 30, 45]
    const optionsMinutes = []
    for (let i = 0; i < 10; i += 1) {
      optionsMinutes[i] = (i + 1) * 60
    }
    const options = optionsSeconds.concat(optionsMinutes)
    return options.map(seconds =>
      <MenuItem
        key={seconds}
        value={seconds}
        primaryText={`${seconds / 60 >= 1 ? seconds / 60 : seconds} ${seconds >= 60 ? 'min' : 'seg'}`}
      />)
  }

  sendConfiguration = () => {
    this.props.send(
      this.props.morpheusId,
      encodeModuleConfigurationMessage(
        this.props.module,
        'alarm_config',
        { alarme: this.state.alarm, alarme_tempo: this.state.alarmTime }),
    )
  }

  render() {
    return (
      <Wrapper backgroundColor={this.props.boxColors ? this.props.boxColors[5] : '#FFFFFF'}>
        <Title>
          <FontIcon
            className="fa fa-clock-o"
            color={'#FFFFFF'}
            style={this.iconStyle}
          />
          Alarme
        </Title>
        <AlarmConfigurationField>
          <Toggle
            disabled={this.props.enable === null}
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
            disabled={this.props.enable === null}
            floatingLabelFixed
            floatingLabelStyle={{ color: '#FFFFFF' }}
            floatingLabelText="Tempo para disparar"
            floatingLabelFocusStyle={{ color: '#00838F' }}
            hintText="ex.: 1 minuto"
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
            disabled={this.props.enable === null}
            label="Enviar"
            style={{ color: '#00838F' }}
            onClick={this.sendConfiguration}
          />
        </SubmitButton>
      </Wrapper>
    )
  }
}

AlarmConfiguration.propTypes = {
  boxColors: PropTypes.array,
  module: PropTypes.object,
  morpheusId: PropTypes.string.isRequired,
  enable: PropTypes.string,
  send: PropTypes.func.isRequired,
}

AlarmConfiguration.defaultProps = {
  module: null,
  enable: null,
  boxColors: null,
}

AlarmConfiguration.defaultProps = {}

export default AlarmConfiguration
