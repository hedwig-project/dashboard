import { Card } from 'material-ui/Card'
import { Tabs, Tab } from 'material-ui/Tabs'
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import DeviceAddedSnackbar from '@components/DeviceAddedSnackbar'
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

class AddDevicePage extends Component {
  static propTypes = {
    lessThanSmall: PropTypes.bool.isRequired,
    modulesCount: PropTypes.number.isRequired,
    morpheusCount: PropTypes.number.isRequired,
  }

  render() {
    return (
      <Wrapper lessThanSmall={this.props.lessThanSmall}>
        <Card>
          <Tabs>
            <Tab label="Adicionar Morpheus">
              <FormContainer><AddMorpheus /></FormContainer>
            </Tab>
            <Tab label="Adicionar módulo">
              <FormContainer><AddModule /></FormContainer>
            </Tab>
          </Tabs>
        </Card>
        <DeviceAddedSnackbar deviceCount={this.props.modulesCount} message="Módulo adicionado!" />
        <DeviceAddedSnackbar deviceCount={this.props.morpheusCount} message="Morpheus adicionado!" />
      </Wrapper>
    )
  }
}

const mapStateToProps = state => ({
  lessThanSmall: state.browser.lessThan.large,
  modulesCount: state.modules.get('modules').toArray().length,
  morpheusCount: state.morpheus.get('morpheus').toArray().length,
})

export default connect(mapStateToProps)(AddDevicePage)
