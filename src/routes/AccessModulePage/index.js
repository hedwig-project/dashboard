import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import StatusBox from '@routes/AccessModulePage/containers/StatusBox'
import Keyboard from '@routes/AccessModulePage/components/Keyboard'
import GateInfo from '@routes/AccessModulePage/components/GateInfo'

const Wrapper = styled.section`
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
      <Wrapper lessThanSmall={this.props.lessThanSmall}>
        <StatusBox />
        <br />
        <Box>
          <Keyboard />
          <GateInfo />
        </Box>
      </Wrapper>
    )
  }
}

const mapStateToProps = state => ({
  lessThanSmall: state.browser.lessThan.large,
})

export default connect(mapStateToProps)(AccessModulePage)
