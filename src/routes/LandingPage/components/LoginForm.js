import React, { PropTypes } from 'react'
import styled from 'styled-components'
import DefaultButton from '@components/DefaultButton'
import DefaultDialog from '@components/DefaultDialog'
import DefaultInputField from '@components/DefaultInputField'
import fonts from '@consts/fonts'
import colors from '@consts/colors'

const Header = styled.h2`
  font-size: ${fonts.large};
  color: ${colors.mainBlue};
  text-align: center;
  margin: 30px 0 0 0;
  font-weight: normal;
`

const LoginForm = ({
  loginWithPassword,
  authLoading,
  authError,
  handleSubmit,
  clearError,
}) => {
  const decodeError = (errorCode) => {
    return 'Ocorreu um erro desconhecido, tente novamente'
  }

  return (
    <div>
      <Header>Login</Header>
      <form onSubmit={handleSubmit(loginWithPassword)}>
        <div>
          <DefaultInputField
            name="email"
            type="email"
            floatingLabelText="Email"
          />
        </div>
        <div>
          <DefaultInputField
            name="password"
            type="password"
            floatingLabelText="Senha"
          />
        </div>
        <DefaultButton
          disabled={authLoading}
          label="Entrar"
          type="submit"
        />
      </form>
      <DefaultDialog
        actions={[{ label: 'Ok', onTouchTap: clearError }]}
        title="Login inválido"
        open={authError}
        onRequestClose={clearError}
      >
        { authError ? decodeError(authError.code) : '' }
      </DefaultDialog>
    </div>)
}

LoginForm.propTypes = {
  loginWithPassword: PropTypes.func.isRequired,
  authLoading: PropTypes.bool.isRequired,
  authError: PropTypes.object,
  handleSubmit: PropTypes.func.isRequired,
  goToSignUp: PropTypes.func.isRequired,
  goToForgotPassword: PropTypes.func.isRequired,
  clearError: PropTypes.func.isRequired,
}

export default (LoginForm)
