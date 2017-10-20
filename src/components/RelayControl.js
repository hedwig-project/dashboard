import React, {
  Component,
  PropTypes,
} from 'react'
import styled from 'styled-components'
import FontIcon from 'material-ui/FontIcon'
import RaisedButton from 'material-ui/RaisedButton'
import { encodeActionMessage } from '@helpers/morpheus'

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
      moduleId,
      toggle,
      boxColors,
      relay1,
      relay2,
    } = this.props
    /* eslint-disable no-nested-ternary */
    return (
      <Container>
        <Box color={boxColors[0] || '#9E9E9E'}>
          <FontIcon
            className={relay1 === 1 ? 'fa fa-check-circle-o' : (relay1 === 0 ? 'fa fa-times-circle-o' : 'fa fa-question-circle-o')}
            style={this.iconStyle}
            color={'white'}
          />
          <MainInfo>
            {relay1 === 1 ? 'Ativo' : (relay1 === 0 ? 'Inativo' : '?')}
          </MainInfo>
          <BoxTitle>Relê 1</BoxTitle>
          <ButtonContainer>
            <RaisedButton
              disabled={relay1 === null}
              onClick={() =>
                toggle('001', encodeActionMessage(moduleId, 'rele1_action', { rele1: relay1 ? 0 : 1 }))}
              label={relay1 ? 'Desativar' : 'Ativar'}
            />
          </ButtonContainer>
        </Box>
        <Box color={boxColors[1] || '#BDBDBD'}>
          <FontIcon
            className={relay2 === 1 ? 'fa fa-check-circle-o' : (relay2 === 0 ? 'fa fa-times-circle-o' : 'fa fa-question-circle-o')}
            style={this.iconStyle}
            color={'white'}
          />
          <MainInfo>
            {relay2 === 1 ? 'Ativo' : (relay2 === 0 ? 'Inativo' : '?')}
          </MainInfo>
          <BoxTitle>Relê 2</BoxTitle>
          <ButtonContainer>
            <RaisedButton
              disabled={relay2 === null}
              onClick={() =>
                toggle('002', encodeActionMessage(moduleId, 'rele2_action', { rele2: !relay2 ? 0 : 1 }))}
              label={relay2 ? 'Desativar' : 'Ativar'}
            />
          </ButtonContainer>
        </Box>
      </Container>
    );
  }
}

RelayControl.propTypes = {
  moduleId: PropTypes.string.isRequired,
  toggle: PropTypes.func.isRequired,
  boxColors: PropTypes.array,
  relay1: PropTypes.number,
  relay2: PropTypes.number,
}

RelayControl.defaultProps = {
  boxColors: [],
  relay1: null,
  relay2: null,
}

export default RelayControl
