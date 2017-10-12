import React, {
  Component,
  PropTypes,
} from 'react'
import styled from 'styled-components'
import FontIcon from 'material-ui/FontIcon'
import RaisedButton from 'material-ui/RaisedButton'

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
  font-size: 36px;
  padding-top: 10px;
`

const ButtonContainer = styled.div`
  padding: 10px 0;
`

class RelayControl extends Component {
  boxColors = [
    '#9C27B0',
    '#AB47BC',
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
      relay1,
      relay2,
    } = this.props
    /* eslint-disable no-nested-ternary */
    return (
      <Container>
        <Box color={this.boxColors[0]}>
          <FontIcon
            className={relay1 ? 'fa fa-check-circle-o' : (relay1 === false ? 'fa fa-times-circle-o' : 'fa fa-question-circle-o')}
            style={this.iconStyle}
            color={'white'}
          />
          <MainInfo>
            {relay1 ? 'Ativo' : (relay1 === false ? 'Inativo' : '?')}
          </MainInfo>
          <BoxTitle>Relê 1</BoxTitle>
          <ButtonContainer style={relay1 === undefined ? { display: 'none' } : {}}>
            <RaisedButton label={relay1 ? 'Desativar' : 'Ativar'} />
          </ButtonContainer>
        </Box>
        <Box color={this.boxColors[1]}>
          <FontIcon
            className={relay2 ? 'fa fa-check-circle-o' : (relay2 === false ? 'fa fa-times-circle-o' : 'fa fa-question-circle-o')}
            style={this.iconStyle}
            color={'white'}
          />
          <MainInfo>
            {relay2 ? 'Ativo' : (relay2 === false ? 'Inativo' : '?')}
          </MainInfo>
          <BoxTitle>Relê 2</BoxTitle>
          <ButtonContainer style={relay2 === undefined ? { display: 'none' } : {}}>
            <RaisedButton label={relay2 ? 'Desativar' : 'Ativar'} />
          </ButtonContainer>
        </Box>
      </Container>
    );
  }
}

RelayControl.propTypes = {
  relay1: PropTypes.bool.isRequired,
  relay2: PropTypes.bool.isRequired,
}

export default RelayControl
