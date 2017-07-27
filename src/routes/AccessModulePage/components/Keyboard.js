import React, {
  Component,
  PropTypes,
} from 'react'
import styled from 'styled-components'
import FontIcon from 'material-ui/FontIcon'

const Container = styled.article`
  width: 50%;
  display: flex;
  flex-direction: column;
  background-color: #ECEFF1;
`

const KeyContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`

const Visor = styled.div`
  width: 100%;
  height: 70px;
  font-family: 'Roboto', sans-serif;
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
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  padding: 20px 0px;
  text-align: center;
`

class Keyboard extends Component {
  render() {
    const {
      password,
      type,
      erase,
    } = this.props
    return (
      <Container>
        <Visor>{ password && password.length > 0 ? password.replace(/./gi, '*') : '' }</Visor>
        <KeyContainer>
          <Key onClick={() => type(1)}>1</Key>
          <Key onClick={() => type(2)}>2</Key>
          <Key onClick={() => type(3)}>3</Key>
          <Key onClick={() => type(4)}>4</Key>
          <Key onClick={() => type(5)}>5</Key>
          <Key onClick={() => type(6)}>6</Key>
          <Key onClick={() => type(7)}>7</Key>
          <Key onClick={() => type(8)}>8</Key>
          <Key onClick={() => type(9)}>9</Key>
          <Key onClick={() => erase()}>
            <FontIcon
              className="fa fa-undo"
              color={'#37474F'}
            />
          </Key>
          <Key onClick={() => type(0)}>0</Key>
          <Key>
            <FontIcon
              className="fa fa-unlock"
              color={'#37474F'}
            />
          </Key>
        </KeyContainer>
      </Container>
    );
  }
}

Keyboard.propTypes = {
  password: PropTypes.string.isRequired,
  type: PropTypes.func.isRequired,
  erase: PropTypes.func.isRequired,
}

export default Keyboard
