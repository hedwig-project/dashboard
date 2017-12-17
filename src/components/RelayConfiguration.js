import React, { Component, PropTypes } from 'react'
import styled from 'styled-components'
import FontIcon from 'material-ui/FontIcon'
import MenuItem from 'material-ui/MenuItem'
import RaisedButton from 'material-ui/RaisedButton'
import SelectField from 'material-ui/SelectField'
import TimePicker from 'material-ui/TimePicker'
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

const RelayConfigurationField = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  padding: 5px 0 0 32px;
`

const SubmitButton = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  flex-grow: 1;
  padding: 10px 0;
`

class RelayConfiguration extends Component {
  iconStyle = {
    fontSize: '38px',
    lineHeight: '24px',
    marginRight: '10px',
    verticalAlign: 'top',
  }

  constructor(props) {
    super(props)
    this.state = {
      topic: 'auto1_config',
      start: null,
      end: null,
      auto: null,
      lightTimeAuto: null,
      lightTimeManual: null,
    }
  }

  handleTopicOptionChange = (event, index, topic) =>
    this.setState(oldState => ({ ...oldState, topic }))

  handleStartTimePickerChange = (event, date) =>
    this.setState(oldState => ({ ...oldState, start: date }))

  handleEndTimePickerChange = (event, date) =>
    this.setState(oldState => ({ ...oldState, end: date }))

  handleAutoOptionChange = (event, index, value) =>
    this.setState(oldState => ({ ...oldState, auto: value }))

  handleAutoTimeChange = (event, index, value) =>
    this.setState(oldState => ({ ...oldState, lightTimeAuto: value }))

  handleManualTimeChange = (event, index, value) =>
    this.setState(oldState => ({ ...oldState, lightTimeManual: value }))

  renderTimeOptions = () => {
    const options = []
    for (let i = 0; i <= 15; i += 1) {
      options[i] = i
    }
    return options.map(minutes =>
      <MenuItem
        key={minutes}
        value={minutes}
        primaryText={minutes === 0 ? 'Nunca acender' : `${minutes} minutos`}
      />)
  }

  sendConfiguration = () => {
    const payload = {}
    const id = this.state.topic === 'auto1_config' ? 1 : 2
    const keys = {
      initial_time: `initial_time${id}`,
      final_time: `final_time${id}`,
      time_keepon: `time_keepon${id}`,
      time_deslmanual: `time_deslmanual${id}`,
      auto: `sensorauto${id}`,
    }
    payload[keys.initial_time] = this.state.start.getHours()
    payload[keys.final_time] = this.state.end.getHours()
    payload[keys.time_keepon] = this.state.lightTimeAuto
    payload[keys.time_deslmanual] = this.state.lightTimeManual
    payload[keys.auto] = this.state.auto
    this.props.send(
      this.props.morpheusId,
      encodeModuleConfigurationMessage(this.props.module, this.state.topic, payload),
    )
  }

  render() {
    return (
      <Wrapper backgroundColor={this.props.boxColors ? this.props.boxColors[4] : '#FFFFFF'}>
        <Title>
          <FontIcon
            className="fa fa-lightbulb-o"
            color={'#FFFFFF'}
            style={this.iconStyle}
          />
          Acionamento de relés
        </Title>
        <RelayConfigurationField>
          <SelectField
            disabled={this.props.presence === null && this.props.opening === null}
            floatingLabelFixed
            floatingLabelStyle={{ color: '#FFFFFF' }}
            floatingLabelText="Acender automaticamente"
            floatingLabelFocusStyle={{ color: '#00838F' }}
            hintText="ex.: relé 1 ou relé 2"
            style={{ width: '83.5%', marginRight: '30px' }}
            underlineStyle={{ borderColor: '#FFFFFF' }}
            underlineFocusStyle={{ borderColor: '#00838F' }}
            value={this.state.topic}
            onChange={this.handleTopicOptionChange}
          >
            <MenuItem value="auto1_config" primaryText="Relé 1" />
            <MenuItem value="auto2_config" primaryText="Relé 2" />
          </SelectField>
        </RelayConfigurationField>
        <RelayConfigurationField>
          <TimePicker
            disabled={this.props.presence === null && this.props.opening === null}
            floatingLabelFixed
            floatingLabelStyle={{ color: '#FFFFFF' }}
            floatingLabelText={'Hora de acionamento'}
            floatingLabelFocusStyle={{ color: '#00838F' }}
            underlineStyle={{ borderColor: '#FFFFFF' }}
            underlineFocusStyle={{ borderColor: '#00838F' }}
            style={{ width: '40%', marginRight: '30px', marginTop: '-14px' }}
            format="24hr"
            minutesStep={60}
            value={this.state.start}
            onChange={this.handleStartTimePickerChange}
          />
          <TimePicker
            disabled={this.props.presence === null && this.props.opening === null}
            floatingLabelFixed
            floatingLabelStyle={{ color: '#FFFFFF' }}
            floatingLabelText={'Hora de desligamento'}
            floatingLabelFocusStyle={{ color: '#00838F' }}
            underlineStyle={{ borderColor: '#FFFFFF' }}
            underlineFocusStyle={{ borderColor: '#00838F' }}
            style={{ width: '40%', marginRight: '30px', marginTop: '-14px' }}
            format="24hr"
            minutesStep={60}
            value={this.state.end}
            onChange={this.handleEndTimePickerChange}
          />
        </RelayConfigurationField>
        <RelayConfigurationField>
          <SelectField
            disabled={this.props.presence === null && this.props.opening === null}
            floatingLabelFixed
            floatingLabelStyle={{ color: '#FFFFFF' }}
            floatingLabelText="Acionar automaticamente"
            floatingLabelFocusStyle={{ color: '#00838F' }}
            hintText="ex.: com algum dos sensores"
            style={{ width: '83.5%', marginRight: '30px' }}
            underlineStyle={{ borderColor: '#FFFFFF' }}
            underlineFocusStyle={{ borderColor: '#00838F' }}
            value={this.state.auto}
            onChange={this.handleAutoOptionChange}
          >
            <MenuItem value="nao" primaryText="Nunca" />
            <MenuItem value="sensor1" primaryText="Sensor de presença" />
            <MenuItem value="sensor2" primaryText="Sensor de abertura" />
          </SelectField>
        </RelayConfigurationField>
        <RelayConfigurationField>
          <SelectField
            disabled={this.props.presence === null && this.props.opening === null}
            floatingLabelFixed
            floatingLabelStyle={{ color: '#FFFFFF' }}
            floatingLabelText="Tempo de permanência (auto)"
            floatingLabelFocusStyle={{ color: '#00838F' }}
            hintText="ex.: 5 minutos"
            style={{ width: '40%', marginRight: '30px' }}
            underlineStyle={{ borderColor: '#FFFFFF' }}
            underlineFocusStyle={{ borderColor: '#00838F' }}
            value={this.state.lightTimeAuto}
            onChange={this.handleAutoTimeChange}
          >
            {
              this.renderTimeOptions()
            }
          </SelectField>
          <SelectField
            disabled={this.props.presence === null && this.props.opening === null}
            floatingLabelFixed
            floatingLabelStyle={{ color: '#FFFFFF' }}
            floatingLabelText="Tempo de permanência (manual)"
            floatingLabelFocusStyle={{ color: '#00838F' }}
            hintText="ex.: 15 minutos"
            style={{ width: '40%' }}
            underlineStyle={{ borderColor: '#FFFFFF' }}
            underlineFocusStyle={{ borderColor: '#00838F' }}
            value={this.state.lightTimeManual}
            onChange={this.handleManualTimeChange}
          >
            {
              this.renderTimeOptions()
            }
          </SelectField>
        </RelayConfigurationField>
        <SubmitButton>
          <RaisedButton
            disabled={this.props.presence === null && this.props.opening === null}
            label="Enviar"
            style={{ color: '#00838F' }}
            onClick={this.sendConfiguration}
          />
        </SubmitButton>
      </Wrapper>
    )
  }
}

RelayConfiguration.propTypes = {
  boxColors: PropTypes.array,
  module: PropTypes.object,
  morpheusId: PropTypes.string.isRequired,
  opening: PropTypes.number,
  presence: PropTypes.number,
  send: PropTypes.func.isRequired,
}

RelayConfiguration.defaultProps = {
  boxColors: null,
  module: null,
  opening: null,
  presence: null,
}

export default RelayConfiguration
