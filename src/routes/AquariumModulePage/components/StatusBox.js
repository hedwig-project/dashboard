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
  flex: 1;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.color};
  color: white;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  padding: 20px;
  text-align: center;
`

const BoxTitle = styled.div`
  padding-top: 10px;
`

const MainInfo = styled.div`
  font-size: 64px;
  padding-top: 10px;
`

class StatusBox extends Component {
  boxColors = [
    '#F57F17',
    '#F9A825',
    '#FBC02D',
    '#FDD835',
    '#FFEB3B',
    '#FFEE58',
  ]

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
      humidity,
      luminosity,
      opening,
      presence,
      temperature,
    } = this.props
    /* eslint-disable no-nested-ternary */
    return (
      <Container>
        <Box color={this.boxColors[0]}>
          <FontIcon
            className={opening ? 'fa fa-unlock-alt' : (opening === false ? 'fa fa-lock' : 'fa fa-question-circle-o')}
            style={this.iconStyle}
            color={'white'}
          />
          <MainInfo>
            {opening ? 'Aberto' : (opening === false ? 'Fechado' : '?')}
          </MainInfo>
          <BoxTitle>Sensor de abertura</BoxTitle>
        </Box>
        <Box color={this.boxColors[1]}>
          <FontIcon
            className="fa fa-user"
            style={this.iconStyle}
            color={'white'}
          />
          <MainInfo>{presence || '?'}</MainInfo>
          <BoxTitle>Sensor de presença</BoxTitle>
        </Box>
        <Box color={this.boxColors[2]}>
          <div>
            <FontIcon
              className="fa fa-thermometer-three-quarters"
              style={this.iconStyle}
              color={'white'}
            />
            <MainInfo>{`${temperature || '?'} ºC`}</MainInfo>
            <BoxTitle>Temperatura</BoxTitle>
          </div>
        </Box>
        <Box color={this.boxColors[3]}>
          <FontIcon
            className="fa fa-tint"
            style={this.iconStyle}
            color={'white'}
          />
          <MainInfo>{`${humidity || '?'} %`}</MainInfo>
          <BoxTitle>Umidade</BoxTitle>
        </Box>
        <Box color={this.boxColors[4]}>
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
  humidity: PropTypes.number.isRequired,
  luminosity: PropTypes.number.isRequired,
  opening: PropTypes.bool.isRequired,
  presence: PropTypes.number.isRequired,
  temperature: PropTypes.number.isRequired,
}

export default StatusBox
