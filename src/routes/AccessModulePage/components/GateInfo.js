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
  font-family: 'Roboto', sans-serif;
  padding-left: 20px;
`

const Status = styled.div`
  background-color: #E0F7FA;
  color: #006064;
  font-size: 24px;
  padding: 25px 15px;
`

const AccessList = styled.div`
  display: flex;
  flex-direction: column;
`

const AccessListItem = styled.div`
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

  render() {
    return (
      <Container>
        <Status>
          <FontIcon
            className="fa fa-check-circle-o"
            style={this.iconStyle}
            color={'#006064'}
          />
          Portão fechado
        </Status>
        <AccessList>
          <AccessListItem backgroundColor={'#00838F'} color={'#F5F5F5'}>
            Últimos acessos
          </AccessListItem>
          <AccessListItem backgroundColor={'#4DD0E1'}>
            Terça, 25 de julho de 2017 19:16:34
          </AccessListItem>
          <AccessListItem backgroundColor={'#4DD0E1'}>
            Terça, 25 de julho de 2017 17:02:12
          </AccessListItem>
          <AccessListItem backgroundColor={'#4DD0E1'}>
            Terça, 25 de julho de 2017 7:01:57
          </AccessListItem>
          <AccessListItem backgroundColor={'#4DD0E1'}>
            Segunda, 24 de julho de 2017 20:09:03
          </AccessListItem>
        </AccessList>
      </Container>
    );
  }
}

export default GateInfo
