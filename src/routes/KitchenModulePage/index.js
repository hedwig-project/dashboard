import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import StatusBox from '@routes/KitchenModulePage/containers/StatusBox'
import RelayControl from '@routes/KitchenModulePage/containers/RelayControl'

const Wrapper = styled.section`
  width: 100%;
  padding: 20px;
`

class KitchenModulePage extends Component {
  static propTypes = {
    lessThanSmall: PropTypes.bool.isRequired,
  }

  render() {
    return (
      <Wrapper lessThanSmall={this.props.lessThanSmall}>
        <StatusBox />
        <br />
        <RelayControl />
        <br />
      </Wrapper>
    )
  }
}

const mapStateToProps = state => ({
  lessThanSmall: state.browser.lessThan.large,
})

export default connect(mapStateToProps)(KitchenModulePage)
