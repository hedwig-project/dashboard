import React, { Component, PropTypes } from 'react'
import styled from 'styled-components'
import FontIcon from 'material-ui/FontIcon'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

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
  padding: 20px 0;
`

const LightConfigurationField = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  padding: 5px 0 0 32px;
`

const SubmitButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 15px 0;
`

class AccessLightConfiguration extends Component {
  iconStyle = {
    fontSize: '38px',
    lineHeight: '24px',
    marginRight: '10px',
    verticalAlign: 'top',
  }

  render() {
    const { lightConfigurationSubmit, handleSubmit } = this.props
    return (
      <Wrapper onSubmit={handleSubmit(lightConfigurationSubmit)}>
        <Title>
          <FontIcon
            className="fa fa-lightbulb-o"
            color={'#FFFFFF'}
            style={this.iconStyle}
          />
          Configurar luzes
        </Title>
        <LightConfigurationField>
          <TextField
            name={'initialTime'}
            floatingLabelFixed
            floatingLabelStyle={{ color: '#00838F' }}
            floatingLabelText={'Hora de início de acendimento'}
            floatingLabelFocusStyle={{ color: '#FFFFFF' }}
            underlineStyle={{ borderColor: '#00838F' }}
            underlineFocusStyle={{ borderColor: '#FFFFFF' }}
            style={{ width: '40%', marginRight: '30px', marginTop: '-14px' }}
          />
          <TextField
            name={'finalTime'}
            floatingLabelFixed
            floatingLabelStyle={{ color: '#00838F' }}
            floatingLabelText={'Hora de fim de acendimento'}
            floatingLabelFocusStyle={{ color: '#FFFFFF' }}
            underlineStyle={{ borderColor: '#00838F' }}
            underlineFocusStyle={{ borderColor: '#FFFFFF' }}
            style={{ width: '40%', marginTop: '-14px' }}
          />
        </LightConfigurationField>
        <LightConfigurationField>
          <TextField
            name={'keepOn'}
            floatingLabelFixed
            floatingLabelStyle={{ color: '#00838F' }}
            floatingLabelText={'Tempo de permanência acesas (minutos)'}
            floatingLabelFocusStyle={{ color: '#FFFFFF' }}
            underlineStyle={{ borderColor: '#00838F' }}
            underlineFocusStyle={{ borderColor: '#FFFFFF' }}
            style={{ width: '60%', marginTop: '-14px' }}
          />
        </LightConfigurationField>
        <SubmitButton>
          <RaisedButton label="Enviar" style={{ color: '#00838F' }} type="submit" />
        </SubmitButton>
      </Wrapper>
    )
  }
}

AccessLightConfiguration.propTypes = {
  lightConfigurationSubmit: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}

export default AccessLightConfiguration
