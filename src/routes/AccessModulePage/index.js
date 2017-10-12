import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import StatusBox from '@routes/AccessModulePage/containers/StatusBox'
import RelayControl from '@routes/AccessModulePage/containers/RelayControl'
import Keyboard from '@routes/AccessModulePage/containers/Keyboard'
import AlarmInfo from '@routes/AccessModulePage/containers/AlarmInfo'
import GateInfo from '@routes/AccessModulePage/containers/GateInfo'
import AlarmConfiguration from '@routes/AccessModulePage/containers/AlarmConfiguration'
import LightConfiguration from '@routes/AccessModulePage/containers/LightConfiguration'
import GatePasswordConfiguration from '@routes/AccessModulePage/containers/GatePasswordConfiguration'

const Wrapper = styled.section`
  width: 100%;
`

const Content = styled.section`
  width: 100%;
  padding: 20px;
`

const Box = styled.section`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  background-color: #80DEEA;
`

class AccessModulePage extends Component {
  static propTypes = {
    lessThanSmall: PropTypes.bool.isRequired,
  }

  render() {
    return (
      <Wrapper>
        <Content lessThanSmall={this.props.lessThanSmall}>
          <StatusBox />
          <br />
          <RelayControl />
          <br />
          <AlarmInfo />
          <br />
          <Box>
            <Keyboard />
            <GateInfo />
          </Box>
          <br />
          <AlarmConfiguration />
          <br />
          <LightConfiguration />
          <br />
          <GatePasswordConfiguration />
        </Content>
      </Wrapper>
    )
  }
}

const mapStateToProps = state => ({
  lessThanSmall: state.browser.lessThan.large,
})

export default connect(mapStateToProps)(AccessModulePage)
