import React, {
  Component,
  PropTypes,
} from 'react'
import styled from 'styled-components'
import FontIcon from 'material-ui/FontIcon'

const Container = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`

const Box = styled.article`
  width: 100%;
  min-height: 180px;
  flex-grow: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.color};
  color: white;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  padding: 50px 20px;
  text-align: center;
`

const MainInfo = styled.div`
  font-size: 48px;
`

const ExtraInfo = styled.div`
  padding-top: 10px;
`

const Info = styled.div`
  padding: 0 30px;
`

class AccessStatusBox extends Component {
  iconStyle = {
    display: 'block',
    fontSize: '64px',
  }

  iconStyleAlt = {
    display: 'block',
    fontSize: '64px',
  }

  render() {
    const {
      boxColors,
      gate,
      alarm,
      alarmLastChange,
    } = this.props
    /* eslint-disable no-nested-ternary */
    return (
      <Container>
        <Box color={boxColors[1] || '#212121'}>
          <Info>
            <FontIcon
              className={gate === 1 ? 'fa fa-unlock-alt' : (gate === 0 ? 'fa fa-lock' : 'fa fa-question-circle-o')}
              style={this.iconStyle}
              color={'white'}
            />
          </Info>
          <Info>
            <MainInfo>
              Portão {gate === 1 ? 'Aberto' : (gate === 0 ? 'Fechado' : '?')}
            </MainInfo>
          </Info>
        </Box>
        <Box color={boxColors[2] || '#424242'}>
          <Info>
            <FontIcon
              className="fa fa-bell-o"
              style={this.iconStyle}
              color={'white'}
            />
          </Info>
          <Info>
            <MainInfo>Alarme {alarm === 1 ? 'Ativado' : (alarm === 0 ? 'Desativado' : '?')}</MainInfo>
            <ExtraInfo>Última alteração há {alarmLastChange !== null ? alarmLastChange : '?'} minutos</ExtraInfo>
          </Info>
        </Box>
      </Container>
    );
  }
}

AccessStatusBox.propTypes = {
  boxColors: PropTypes.array,
  gate: PropTypes.number,
  alarm: PropTypes.number,
  alarmLastChange: PropTypes.number,
}

AccessStatusBox.defaultProps = {
  boxColors: [],
  gate: null,
  alarm: null,
  alarmLastChange: null,
}

export default AccessStatusBox
