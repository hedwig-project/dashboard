import React, { PropTypes } from 'react'
import withNavigation from '@hocs/withNavigation'
import Signup from '@modules/auth/containers/Signup'

const backTextStyle = {
  textAlign: 'center',
  cursor: 'pointer',
}

const SignupPage = ({
  goTo,
}) => (
  <div className="central-container">
    <Signup />
    <p style={backTextStyle} onClick={()=>goTo('/login')}>Voltar para login</p>
  </div>
)

SignupPage.propTypes = {
  goTo: PropTypes.func.isRequired,
}

export default withNavigation(SignupPage);
