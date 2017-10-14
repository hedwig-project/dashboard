import React, { PropTypes } from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  color: #424242;
  padding: 150px 0;
`

const Title = styled.h1`
  font-size: 56px;
`

const Text = styled.div`
  font-size: 24px;
  padding: 20px 0;
`

export default () => (
  <Wrapper>
    <Title>Oi, tudo bem?</Title>
    <Text>Para começar, escolha um dos módulos no menu!</Text>
  </Wrapper>
)
