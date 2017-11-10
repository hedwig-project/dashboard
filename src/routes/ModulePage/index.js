import React, { Component, PropTypes } from 'react'
import styled from 'styled-components'
import AccessAlarmConfiguration from '@components/AccessAlarmConfiguration'
import AccessLightConfiguration from '@components/AccessLightConfiguration'
import AccessKeyboard from '@components/AccessKeyboard'
import AccessStatusBox from '@components/AccessStatusBox'
import LastUpdatedAt from '@components/LastUpdatedAt'
import StatusBox from '@components/StatusBox'
import RelayControl from '@components/RelayControl'

const Wrapper = styled.section`
  width: 100%;
  min-height: 100%;
  background-color: ${props => props.backgroundColor || '#FFFFFF'}
`

const Content = styled.div`
  width: 100%;
`

const AccessContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`

const KeyboardContainer = styled.div`
  width: ${props => (props.lessThanLarge ? '100%' : '40%')};
  min-height: 180px;
  display: flex;
  background-color: ${props => props.backgroundColor || '#FFFFFF'};
  padding: 20px;
`

const AccessStatusContainer = styled.div`
  width: ${props => (props.lessThanLarge ? '100%' : '60%')};
  min-height: 180px;
  display: flex;
`
const AccessConfigurationContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`

const AccessConfigurationBox = styled.div`
  width: ${props => (props.lessThanLarge ? '100%' : '50%')};
  display: flex;
`

class ModulePage extends Component {
  static propTypes = {
    module: PropTypes.object.isRequired,
    emitAction: PropTypes.func.isRequired,
    emitConfiguration: PropTypes.func.isRequired,
    boxColors: PropTypes.array,
    humidity: PropTypes.number,
    luminosity: PropTypes.number,
    opening: PropTypes.number,
    presence: PropTypes.number,
    temperature: PropTypes.number,
    relay1: PropTypes.number,
    relay1Name: PropTypes.string,
    relay2: PropTypes.number,
    relay2Name: PropTypes.string,
    lastUpdatedAt: PropTypes.number,
    gate: PropTypes.number,
    alarm: PropTypes.number,
    alarmLastChange: PropTypes.number,
    lessThanLarge: PropTypes.bool.isRequired,
  }

  static defaultProps = {
    boxColors: [],
    humidity: null,
    luminosity: null,
    opening: null,
    presence: null,
    temperature: null,
    relay1: null,
    relay1Name: 'Relé 1',
    relay2: null,
    relay2Name: 'Relé 2',
    lastUpdatedAt: null,
    gate: null,
    alarm: null,
    alarmLastChange: null,
  }

  render() {
    const {
      module,
      emitAction,
      emitConfiguration,
      boxColors,
      humidity,
      luminosity,
      opening,
      presence,
      temperature,
      relay1,
      relay1Name,
      relay2,
      relay2Name,
      lastUpdatedAt,
      gate,
      alarm,
      alarmLastChange,
      lessThanLarge,
    } = this.props

    return (
      <Wrapper backgroundColor={boxColors[6]}>
        <Content>
          {
            module.location === 'ACCESS' &&
            <AccessContainer>
              <KeyboardContainer backgroundColor={boxColors[0]} lessThanLarge={lessThanLarge}>
                <AccessKeyboard
                  moduleId={module.serial}
                  morpheusId={module.morpheus.serial}
                  gate={gate}
                  send={emitAction}
                />
              </KeyboardContainer>
              <AccessStatusContainer lessThanLarge={lessThanLarge}>
                <AccessStatusBox
                  boxColors={boxColors}
                  gate={gate}
                  alarm={alarm}
                  alarmLastChange={alarmLastChange}
                />
              </AccessStatusContainer>
              <AccessConfigurationContainer>
                <AccessConfigurationBox lessThanLarge={lessThanLarge}>
                  <AccessAlarmConfiguration
                    moduleId={module.serial}
                    morpheusId={module.morpheus.serial}
                    alarm={alarm}
                    send={emitConfiguration}
                  />
                </AccessConfigurationBox>
                <AccessConfigurationBox lessThanLarge={lessThanLarge}>
                  <AccessLightConfiguration
                    moduleId={module.serial}
                    morpheusId={module.morpheus.serial}
                    presence={presence}
                    send={emitConfiguration}
                  />
                </AccessConfigurationBox>
              </AccessConfigurationContainer>
            </AccessContainer>
          }
          <StatusBox
            boxColors={boxColors}
            humidity={humidity}
            luminosity={luminosity}
            opening={opening}
            presence={presence}
            temperature={temperature}
          />
          <RelayControl
            moduleId={module.serial}
            morpheusId={module.morpheus.serial}
            toggle={emitAction}
            boxColors={boxColors.slice(-3, -1)}
            relay1={relay1}
            relay1Name={relay1Name}
            relay2={relay2}
            relay2Name={relay2Name}
          />
          <LastUpdatedAt timestamp={lastUpdatedAt} />
        </Content>
      </Wrapper>
    )
  }
}

export default ModulePage
