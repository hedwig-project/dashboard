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
    boxColors: PropTypes.array.isRequired,
    humidity: PropTypes.number.isRequired,
    luminosity: PropTypes.number.isRequired,
    opening: PropTypes.bool.isRequired,
    presence: PropTypes.number.isRequired,
    temperature: PropTypes.number.isRequired,
    relay1: PropTypes.bool.isRequired,
    relay2: PropTypes.bool.isRequired,
    lastUpdatedAt: PropTypes.number.isRequired,
  }

  render() {
    const {
      boxColors,
      humidity,
      luminosity,
      opening,
      presence,
      temperature,
      relay1,
      relay2,
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
            boxColors={boxColors.slice(-2)}
            relay1={relay1}
            relay2={relay2}
          />
          <br />
          <LastUpdatedAt timestamp={lastUpdatedAt} />
        </Content>
      </Wrapper>
    )
  }
}

export default ModulePage
