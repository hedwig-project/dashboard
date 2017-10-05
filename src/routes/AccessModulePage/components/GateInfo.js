import React, {
  Component,
  PropTypes,
} from 'react'
import styled from 'styled-components'
import FontIcon from 'material-ui/FontIcon'

const Container = styled.article`
  width: 50%;
  min-height: 350px;
  display: flex;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;
  padding-left: 20px;
`

const Status = styled.div`
  flex-grow: 1;
  background-color: #E0F7FA;
  color: #006064;
  font-size: 24px;
  padding: 25px 15px;
`

const AccessList = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`

const AccessListItem = styled.div`
  flex-grow: 1;
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};
  font-size: 16px;
  margin-top: 3px;
  padding: 16px 15px;
`

class GateInfo extends Component {
  iconStyle = {
    fontSize: '36px',
    lineHeight: '24px',
    marginRight: '5px',
    verticalAlign: 'middle',
  }

  /* eslint-disable no-nested-ternary */
  render() {
    const {
      accesses,
      gate,
    } = this.props
    return (
      <Container>
        <Status>
          <FontIcon
            className={gate ? 'fa fa-unlock-alt' : (gate === false ? 'fa fa-lock' : 'fa fa-question-circle-o')}
            style={this.iconStyle}
            color={'#006064'}
          />
          {gate ? 'Portão aberto' : (gate === false ? 'Portão fechado' : 'Portão ?')}
        </Status>
        <AccessList>
          <AccessListItem backgroundColor={'#00838F'} color={'#F5F5F5'}>
            Últimos acessos
          </AccessListItem>
          {
            accesses.slice(0, 4).map(access =>
              <AccessListItem backgroundColor={'#4DD0E1'}>
                {access}
              </AccessListItem>)
          }
        </AccessList>
      </Container>
    );
  }
}

GateInfo.propTypes = {
  accesses: PropTypes.array,
  gate: PropTypes.bool.isRequired,
}

GateInfo.defaultProps = {
  accesses: [],
}

export default GateInfo
