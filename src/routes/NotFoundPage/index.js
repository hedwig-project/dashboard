import React, { PropTypes } from 'react'
import styled from 'styled-components'
import pattern from '@images/au.jpg'

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0.5) 80%, rgba(0,0,0,0) 100%), url(${pattern});
  color: #424242;
  text-align: center;
`

const Title = styled.h1`
  font-size: 128px;
`

const Text = styled.div`
  font-size: 24px;
  padding: 20px 0;
`

export default () => (
  <Wrapper>
    <Title>404</Title>
    <Text>Ooops! Parece que essa página não existe :(</Text>
  </Wrapper>
)
