import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import StatusBox from '@routes/HallwayModulePage/containers/StatusBox'
import RelayControl from '@routes/HallwayModulePage/containers/RelayControl'

const Wrapper = styled.section`
  width: 100%;
`

const Content = styled.section`
  width: 100%;
  padding: 20px;
`

class HallwayModulePage extends Component {
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
        </Content>
      </Wrapper>
    )
  }
}

const mapStateToProps = state => ({
  lessThanSmall: state.browser.lessThan.large,
})

export default connect(mapStateToProps)(HallwayModulePage)
