import { Card } from 'material-ui/Card'
import { Tabs, Tab } from 'material-ui/Tabs'
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import MorpheusSettings from '@routes/DeviceSettingsPage/containers/MorpheusSettings'
import ModuleSettings from '@routes/DeviceSettingsPage/containers/ModuleSettings'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: ${props => (props.lessThanMedium ? '100%' : '50%')};
  padding: 50px 20px;
  margin: 0 auto;
`

const FormContainer = styled.div`
  background-color: white;
  padding: 10px;
`

class AddDevicePage extends Component {
  static propTypes = {
    lessThanMedium: PropTypes.bool.isRequired,
  }

  render() {
    return (
      <Wrapper lessThanMedium={this.props.lessThanMedium}>
        <Card>
          <Tabs>
            <Tab label="Gerenciar Morpheus">
              <FormContainer><MorpheusSettings /></FormContainer>
            </Tab>
            <Tab label="Gerenciar módulos">
              <FormContainer><ModuleSettings /></FormContainer>
            </Tab>
          </Tabs>
        </Card>
      </Wrapper>
    )
  }
}

const mapStateToProps = state => ({
  lessThanMedium: state.browser.lessThan.medium,
})

export default connect(mapStateToProps)(AddDevicePage)
