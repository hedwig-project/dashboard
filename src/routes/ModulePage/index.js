import React, { Component, PropTypes } from 'react'
import styled from 'styled-components'
import LastUpdatedAt from '@components/LastUpdatedAt'
import StatusBox from '@components/StatusBox'
import RelayControl from '@components/RelayControl'

const Wrapper = styled.section`
  width: 100%;
`

const Content = styled.section`
  width: 100%;
  padding: 20px;
`

class ModulePage extends Component {
  static propTypes = {
    module: PropTypes.object.isRequired,
    emitAction: PropTypes.func.isRequired,
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
  }

  render() {
    const {
      module,
      emitAction,
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
    } = this.props

    return (
      <Wrapper>
        <Content>
          <StatusBox
            boxColors={boxColors}
            humidity={humidity}
            luminosity={luminosity}
            opening={opening}
            presence={presence}
            temperature={temperature}
          />
          <br />
          <RelayControl
            moduleId={module.serial}
            morpheusId={module.morpheus.serial}
            toggle={emitAction}
            boxColors={boxColors.slice(-2)}
            relay1={relay1}
            relay1Name={relay1Name}
            relay2={relay2}
            relay2Name={relay2Name}
          />
          <br />
          <LastUpdatedAt timestamp={lastUpdatedAt} />
        </Content>
      </Wrapper>
    )
  }
}

export default ModulePage
