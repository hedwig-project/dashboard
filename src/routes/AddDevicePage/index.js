import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import FlatButton from 'material-ui/FlatButton'
import AddMorpheus from '@routes/AddDevicePage/containers/AddMorpheus'
import AddModule from '@routes/AddDevicePage/containers/AddModule'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: ${props => (props.lessThanSmall ? '100%' : '50%')};
  padding: 50px 20px;
  margin: 0 auto;
`

const FormContainer = styled.div`
  background-color: white;
  padding: 10px;
`

const ButtonContainer = styled.div`
  background-color: white;
  padding: 10px;
`

const mapStateToProps = state => ({
  lessThanSmall: state.browser.lessThan.large,
})

class AddDevicePage extends Component {
  static propTypes = {
    lessThanSmall: PropTypes.bool.isRequired,
  }

  constructor(props) {
    super(props)

    this.state = {
      showMorpheus: true,
      showModule: false,
    }

    this.goToMorpheus = this.goToMorpheus.bind(this)
    this.goToModule = this.goToModule.bind(this)
  }

  goToMorpheus() {
    this.setState({
      showMorpheus: true,
      showModule: false,
    })
  }

  goToModule() {
    this.setState({
      showMorpheus: false,
      showModule: true,
    })
  }

  render() {
    const {
      lessThanSmall,
    } = this.props
    const {
      showMorpheus,
      showModule,
    } = this.state

    const flatButtonStyle = {
      width: '100%',
      margin: '10px 0',
      borderRadius: 10,
    }

    return (
      <Wrapper>
        <FormContainer>
          { showMorpheus && (
            <AddMorpheus />
          )}
          { showModule && (
            <AddModule />
          )}
        </FormContainer>
        <p style={{ 'text-align': 'center' }}>Ou</p>
        <ButtonContainer>
          { !showModule && (
            <FlatButton
              label="Adicionar módulo"
              style={flatButtonStyle}
              labelStyle={{ textTransform: 'none' }}
              onClick={this.goToModule}
            />
          )}
          { !showMorpheus && (
            <FlatButton
              label="Adicionar Morpheus"
              style={flatButtonStyle}
              labelStyle={{ textTransform: 'none' }}
              onClick={this.goToMorpheus}
            />
          )}
        </ButtonContainer>
      </Wrapper>
    )
  }
}

export default connect(mapStateToProps)(AddDevicePage)
