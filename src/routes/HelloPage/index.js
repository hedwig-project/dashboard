import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  color: #424242;
  padding: ${props => (props.lessThanSmall ? '150px 10px' : '150px 0')};
  text-align: center;
`

const Title = styled.h1`
  font-size: 56px;
`

const Text = styled.div`
  font-size: 24px;
  padding: 20px 0;
`

const HelloPage = props => (
  <Wrapper lessThanSmall={props.lessThanSmall}>
    <Title>Oi, tudo bem?</Title>
    <Text>Para começar, escolha um dos módulos no menu!</Text>
  </Wrapper>
)

HelloPage.propTypes = {
  lessThanSmall: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
  lessThanSmall: state.browser.lessThan.small,
})

export default connect(mapStateToProps)(HelloPage)
