import React, { Component, PropTypes } from 'react'
import styled from 'styled-components'
import FontIcon from 'material-ui/FontIcon'
import MenuItem from 'material-ui/MenuItem'
import RaisedButton from 'material-ui/RaisedButton'
import SelectField from 'material-ui/SelectField'
import TimePicker from 'material-ui/TimePicker'
import { encodeActionMessage } from '@helpers/morpheus'

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: #26C6DA;
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

const LightConfigurationField = styled.div`
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

class AccessLightConfiguration extends Component {
  iconStyle = {
    fontSize: '38px',
    lineHeight: '24px',
    marginRight: '10px',
    verticalAlign: 'top',
  }

  constructor(props) {
    super(props)
    this.state = {
      start: null,
      end: null,
      lightTimeAuto: null,
      lightTimeManual: null,
    }
  }

  handleStartTimePickerChange = (event, date) =>
    this.setState(oldState => ({ ...oldState, start: date }))

  handleEndTimePickerChange = (event, date) =>
    this.setState(oldState => ({ ...oldState, end: date }))

  handleAutoTimeChange = (event, index, value) =>
    this.setState(oldState => ({ ...oldState, lightTimeAuto: value }))

  handleManualTimeChange = (event, index, value) =>
    this.setState(oldState => ({ ...oldState, lightTimeManual: value }))

  renderTimeOptions = () => {
    const options = []
    for (let i = 1; i <= 15; i += 1) {
      options[i] = i
    }
    return options.map(minutes =>
      <MenuItem
        key={minutes}
        value={minutes}
        primaryText={`${minutes} minutos`}
      />)
  }

  sendConfiguration = () => {
    this.props.send(
      this.props.morpheusId,
      encodeActionMessage(
        this.props.moduleId,
        'acesso_config',
        {
          initial_time: this.state.start.getHours(),
          final_time: this.state.end.getHours(),
          time_keepon: this.state.lightTimeAuto,
          time_deslmanual: this.state.lightTimeManual,
        }),
    )
  }

  render() {
    return (
      <Wrapper>
        <Title>
          <FontIcon
            className="fa fa-lightbulb-o"
            color={'#FFFFFF'}
            style={this.iconStyle}
          />
          Configurar luzes
        </Title>
        <LightConfigurationField>
          <TimePicker
            disabled={this.props.presence === null}
            floatingLabelFixed
            floatingLabelStyle={{ color: '#FFFFFF' }}
            floatingLabelText={'Hora de acendimento'}
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
            disabled={this.props.presence === null}
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
        </LightConfigurationField>
        <LightConfigurationField>
          <SelectField
            disabled={this.props.presence === null}
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
            disabled={this.props.presence === null}
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
        </LightConfigurationField>
        <SubmitButton>
          <RaisedButton
            disabled={this.props.presence === null}
            label="Enviar"
            style={{ color: '#00838F' }}
            onClick={this.sendConfiguration}
          />
        </SubmitButton>
      </Wrapper>
    )
  }
}

AccessLightConfiguration.propTypes = {
  moduleId: PropTypes.string.isRequired,
  morpheusId: PropTypes.string.isRequired,
  presence: PropTypes.number,
  send: PropTypes.func.isRequired,
}

AccessLightConfiguration.defaultProps = {
  presence: null,
}

export default AccessLightConfiguration
