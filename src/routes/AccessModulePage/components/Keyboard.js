import React, {
  Component,
  PropTypes,
} from 'react'
import styled from 'styled-components'

const Container = styled.article`
  width: 50%;
  display: flex;
  flex-direction: column;
  background-color: #ECEFF1;
  font-family: 'Roboto', sans-serif;
`

const KeyContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`

const Visor = styled.div`
  width: 100%;
  background-color: #EEEEEE;
  border: 1px solid #ECEFF1;
  font-size: 24px;
  padding: 20px 15px;
`

const Key = styled.div`
  width: 33.33333%;
  background-color: #CFD8DC;
  border: 1px solid #ECEFF1;
  color: #37474F;
  font-size: 24px;
  padding: 20px 0px;
  text-align: center;
`

class Keyboard extends Component {
  render() {
    return (
      <Container>
        <Visor>****</Visor>
        <KeyContainer>
          <Key>1</Key>
          <Key>2</Key>
          <Key>3</Key>
          <Key>4</Key>
          <Key>5</Key>
          <Key>6</Key>
          <Key>7</Key>
          <Key>8</Key>
          <Key>9</Key>
          <Key>Limpa</Key>
          <Key>0</Key>
          <Key>Abre</Key>
        </KeyContainer>
      </Container>
    );
  }
}

export default Keyboard
