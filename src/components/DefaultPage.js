import React, { Component, PropTypes } from 'react'
import styled from 'styled-components'
import Menu from '@containers/Menu'

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`

const Content = styled.div`
  width: 100%;
  height: 100%;
`

class DefaultPage extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
  }

  render() {
    const {
      children,
      isAuthenticated,
    } = this.props

    return (
      <Wrapper>
        {isAuthenticated && (<Menu />)}
        <Content>
          {children}
        </Content>
      </Wrapper>
    )
  }
}

export default DefaultPage
