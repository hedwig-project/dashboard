import React, { PropTypes } from 'react'
import withNavigation from '@hocs/withNavigation'
import ForgotPassword from '@modules/auth/containers/ForgotPassword'

const backTextStyle = {
  textAlign: 'center',
  cursor: 'pointer',
}

const ForgotPasswordPage = ({
  goTo,
}) => (
  <div className="central-container">
    <ForgotPassword />
    <p style={backTextStyle} onClick={()=>goTo('/login')}>Voltar para login</p>
  </div>
)

ForgotPasswordPage.propTypes = {
  goTo: PropTypes.func.isRequired,
}

export default withNavigation(ForgotPasswordPage)
