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
  login,
  authFetching,
  authError,
  handleSubmit,
  clearError,
}) => {
  const decodeError = () => ('Login inválido')

  return (
    <div>
      <Header>Login</Header>
      <form onSubmit={handleSubmit(login)}>
        <div>
          <DefaultInputField
            name="username"
            floatingLabelText="Username"
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
          disabled={authFetching}
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
        { authError ? decodeError() : '' }
      </DefaultDialog>
    </div>)
}

LoginForm.propTypes = {
  login: PropTypes.func.isRequired,
  authFetching: PropTypes.bool.isRequired,
  authError: PropTypes.array,
  handleSubmit: PropTypes.func.isRequired,
  clearError: PropTypes.func.isRequired,
}

export default (LoginForm)
