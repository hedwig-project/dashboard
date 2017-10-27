import React, {
  Component,
  PropTypes,
} from 'react'
import styled from 'styled-components'
import FontIcon from 'material-ui/FontIcon'

const Container = styled.article`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`

const Box = styled.article`
  width: 100%;
  min-height: 180px;
  flex: 1 1 200px;
  display: flex;
  flex-direction: column;
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

const BoxTitle = styled.div`
  padding-top: 10px;
`

const MainInfo = styled.div`
  font-size: 56px;
  padding-top: 10px;
`

class StatusBox extends Component {
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
      humidity,
      luminosity,
      opening,
      presence,
      temperature,
    } = this.props
    /* eslint-disable no-nested-ternary */
    return (
      <Container>
        <Box color={boxColors[0] || '#212121'}>
          <FontIcon
            className={opening === 1 ? 'fa fa-unlock-alt' : (opening === 0 ? 'fa fa-lock' : 'fa fa-question-circle-o')}
            style={this.iconStyle}
            color={'white'}
          />
          <MainInfo>
            {opening === 1 ? 'Aberto' : (opening === 0 ? 'Fechado' : '?')}
          </MainInfo>
          <BoxTitle>Sensor de abertura</BoxTitle>
        </Box>
        <Box color={boxColors[1] || '#424242'}>
          <FontIcon
            className="fa fa-user"
            style={this.iconStyle}
            color={'white'}
          />
          <MainInfo>{presence === 1 ? 'Sim' : (presence === 0 ? 'Não' : '?')}</MainInfo>
          <BoxTitle>Sensor de presença</BoxTitle>
        </Box>
        <Box color={boxColors[2] || '#616161'}>
          <div>
            <FontIcon
              className="fa fa-thermometer-three-quarters"
              style={this.iconStyle}
              color={'white'}
            />
            <MainInfo>{`${temperature || '?'}ºC`}</MainInfo>
            <BoxTitle>Temperatura</BoxTitle>
          </div>
        </Box>
        <Box color={boxColors[3] || '#757575'}>
          <FontIcon
            className="fa fa-tint"
            style={this.iconStyle}
            color={'white'}
          />
          <MainInfo>{`${humidity || '?'}%`}</MainInfo>
          <BoxTitle>Umidade</BoxTitle>
        </Box>
        <Box color={boxColors[4] || '#9E9E9E'}>
          <FontIcon
            className="fa fa-lightbulb-o"
            style={this.iconStyle}
            color={'white'}
          />
          <MainInfo>{`${luminosity || '?'}`}</MainInfo>
          <BoxTitle>Luminosidade</BoxTitle>
        </Box>
      </Container>
    );
  }
}

StatusBox.propTypes = {
  boxColors: PropTypes.array,
  humidity: PropTypes.number,
  luminosity: PropTypes.number,
  opening: PropTypes.number,
  presence: PropTypes.number,
  temperature: PropTypes.number,
}

StatusBox.defaultProps = {
  boxColors: [],
  humidity: null,
  luminosity: null,
  opening: null,
  presence: null,
  temperature: null,
}

export default StatusBox
