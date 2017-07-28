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

const MainInfoAlt = styled.div`
  font-size: 36px;
  padding-top: 10px;
`

class StatusBox extends Component {
  boxColors = [
    '#0097A7',
    '#00ACC1',
    '#00BCD4',
    '#26C6DA',
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
      alarm,
      alarmTimeSinceLastChange,
      humidity,
      presence,
      temperature,
    } = this.props
    return (
      <Container>
        <Box color={this.boxColors[0]}>
          <FontIcon
            className={alarm ? 'fa fa-check-circle-o' : (alarm === false ? 'fa fa-times-circle-o' : 'fa fa-question-circle-o')}
            style={this.iconStyle}
            color={'white'}
          />
          <MainInfoAlt>
            {alarm ? 'Alarme Ativo' : (alarm === false ? 'Alarme Inativo' : 'Alarme ?')}
          </MainInfoAlt>
          <div>Última alteração {alarmTimeSinceLastChange || '?'} horas atrás</div>
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
      </Container>
    );
  }
}

StatusBox.propTypes = {
  alarm: PropTypes.bool.isRequired,
  alarmTimeSinceLastChange: PropTypes.string.isRequired,
  humidity: PropTypes.number.isRequired,
  presence: PropTypes.number.isRequired,
  temperature: PropTypes.number.isRequired,
}

export default StatusBox
