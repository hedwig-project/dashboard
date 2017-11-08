import React, {
  Component,
  PropTypes,
} from 'react'
import styled from 'styled-components'
import FontIcon from 'material-ui/FontIcon'
import { encodeActionMessage } from '@helpers/morpheus'

const Container = styled.article`
  width: 100%;
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

class AccessKeyboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      password: '',
    }
  }

  type = (key) => {
    this.setState(oldState => ({
      password: oldState.password + key,
    }))
  }

  erase = () => {
    this.setState(oldState => ({
      password: oldState.password.slice(0, -1),
    }))
  }

  enter = () => {
    this.props.send(
      this.props.morpheusId,
      encodeActionMessage(this.props.moduleId, 'abertura_portao', { password: this.state.password }),
    )
    this.setState({ password: '' })
  }

  render() {
    return (
      <Container>
        <Visor>{ this.state.password && this.state.password.length > 0 ? this.state.password.replace(/./gi, '*') : '' }</Visor>
        <KeyContainer>
          <Key onClick={() => this.type('1')}>1</Key>
          <Key onClick={() => this.type('2')}>2</Key>
          <Key onClick={() => this.type('3')}>3</Key>
          <Key onClick={() => this.type('4')}>4</Key>
          <Key onClick={() => this.type('5')}>5</Key>
          <Key onClick={() => this.type('6')}>6</Key>
          <Key onClick={() => this.type('7')}>7</Key>
          <Key onClick={() => this.type('8')}>8</Key>
          <Key onClick={() => this.type('9')}>9</Key>
          <Key onClick={this.erase}>
            <FontIcon
              className="fa fa-undo"
              color={'#37474F'}
            />
          </Key>
          <Key onClick={() => this.type('0')}>0</Key>
          <Key onClick={this.enter}>
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

AccessKeyboard.propTypes = {
  moduleId: PropTypes.string.isRequired,
  morpheusId: PropTypes.string.isRequired,
  send: PropTypes.func.isRequired,
}

export default AccessKeyboard
