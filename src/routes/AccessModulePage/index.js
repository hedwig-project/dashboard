import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import StatusBox from '@routes/AccessModulePage/components/StatusBox'

const Wrapper = styled.section`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
`

class AccessModulePage extends Component {
  static propTypes = {
    lessThanSmall: PropTypes.bool.isRequired,
  }

  render() {
    return (
      <Wrapper lessThanSmall={this.props.lessThanSmall}>
        <StatusBox />
      </Wrapper>
    )
  }
}

const mapStateToProps = state => ({
  lessThanSmall: state.browser.lessThan.large,
})

export default connect(mapStateToProps)(AccessModulePage)
