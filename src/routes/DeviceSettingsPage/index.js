import { Card } from 'material-ui/Card'
import { Tabs, Tab } from 'material-ui/Tabs'
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
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

class DeviceSettingsPage extends Component {
  static propTypes = {
    changeTab: PropTypes.func.isRequired,
    lessThanMedium: PropTypes.bool.isRequired,
    params: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      activeTab: props.params.type || 'morpheus',
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      activeTab: nextProps.params.type || 'morpheus',
    })
  }

  handleChange = (value) => {
    this.props.changeTab(value)
  }

  render() {
    return (
      <Wrapper lessThanMedium={this.props.lessThanMedium}>
        <Card>
          <Tabs
            value={this.state.activeTab}
            onChange={this.handleChange}
          >
            <Tab label="Gerenciar Morpheus" value="morpheus">
              <FormContainer><MorpheusSettings serial={this.props.params.id} /></FormContainer>
            </Tab>
            <Tab label="Gerenciar módulos" value="module">
              <FormContainer><ModuleSettings serial={this.props.params.id} /></FormContainer>
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

const mapDispatchToProps = dispatch => ({
  changeTab(value) {
    dispatch(push(`/device-settings/${value}`))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(DeviceSettingsPage)
