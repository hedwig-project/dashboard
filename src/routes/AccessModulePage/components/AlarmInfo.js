import React, {
  Component,
  PropTypes,
} from 'react'
import styled from 'styled-components'
import FontIcon from 'material-ui/FontIcon'

const Container = styled.article`
  width: 100%;
  display: flex;
  background-color: #E0F7FA;
  color: #006064;
  font-family: 'Roboto', sans-serif;
  padding: 20px;
`

const Status = styled.div`
  flex-grow: 1;
  font-size: 24px;
  line-height: 32px;
`

const LastChange = styled.div`
  flex-grow: 1;
  font-size: 16px;
  line-height: 32px;
`

class AlarmInfo extends Component {
  iconStyle = {
    fontSize: '36px',
    lineHeight: '24px',
    marginRight: '10px',
    verticalAlign: 'middle',
  }

  /* eslint-disable no-nested-ternary */
  render() {
    const {
      alarm,
      alarmTimeSinceLastChange,
    } = this.props
    return (
      <Container>
        <Status>
          <FontIcon
            className={alarm ? 'fa fa-check-circle-o' : (alarm === false ? 'fa fa-times-circle-o' : 'fa fa-question-circle-o')}
            style={this.iconStyle}
            color={'#006064'}
          />
          {alarm ? 'Alarme ativo' : (alarm === false ? 'Alarme desativado' : 'Alarme ?')}
        </Status>
        <LastChange>
          <p>Última alteração {alarmTimeSinceLastChange || '?'} horas atrás</p>
        </LastChange>
      </Container>
    );
  }
}

AlarmInfo.propTypes = {
  alarm: PropTypes.bool.isRequired,
  alarmTimeSinceLastChange: PropTypes.string.isRequired,
}

export default AlarmInfo
