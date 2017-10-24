import { Card } from 'material-ui/Card'
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import UserEdit from '@routes/UserSettingsPage/containers/UserEdit'

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

class UserSettingsPage extends Component {
  static propTypes = {
    lessThanMedium: PropTypes.bool.isRequired,
  }

  render() {
    return (
      <Wrapper lessThanMedium={this.props.lessThanMedium}>
        <Card>
          <FormContainer><UserEdit /></FormContainer>
        </Card>
      </Wrapper>
    )
  }
}

const mapStateToProps = state => ({
  lessThanMedium: state.browser.lessThan.medium,
})

export default connect(mapStateToProps)(UserSettingsPage)
