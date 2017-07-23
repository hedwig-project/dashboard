import React, { PropTypes } from 'react'
import styled from 'styled-components'
import DefaultButton from '@components/DefaultButton'
import DefaultDialog from '@components/DefaultDialog'
import DefaultInputField from '@components/DefaultInputField'
import { normalizeDate } from '@helpers/normalizers'
import fonts from '@consts/fonts'
import colors from '@consts/colors'

const Header = styled.h2`
  font-size: ${fonts.large};
  color: ${colors.mainBlue};
  text-align: center;
  margin: 30px 0 0 0;
  font-weight: normal;
`

const SignupForm = ({
  signUp,
  authLoading,
  handleSubmit,
  authError,
  clearError,
}) => {
  const decodeError = (errorCode) => {
    return 'Ocorreu um erro desconhecido, tente novamente'
  }

  return (
    <div>
      <Header>Cadastro</Header>
      <form onSubmit={handleSubmit(signUp)}>
        <div>
          <DefaultInputField
            name="email"
            type="email"
            floatingLabelText="Email"
          />
        </div>
        <div>
          <DefaultInputField
            name="username"
            floatingLabelText="Nome de usuário"
          />
        </div>
        <div>
          <DefaultInputField
            name="name"
            floatingLabelText="Nome"
          />
        </div>
        <div>
          <DefaultInputField
            name="birthday"
            floatingLabelText="Data de nascimento (DD/MM/AAAA)"
            normalize={normalizeDate}
          />
        </div>
        <div>
          <DefaultInputField
            name="password"
            type="password"
            floatingLabelText="Senha"
          />
        </div>
        <div>
          <DefaultInputField
            name="passwordConfirmation"
            type="password"
            floatingLabelText="Confirme a senha"
          />
        </div>
        <DefaultButton
          disabled={authLoading}
          label="Cadastrar"
          type="submit"
        />
      </form>
      <DefaultDialog
        actions={[{ label: 'Ok', onTouchTap: clearError }]}
        title="Cadastro inválido"
        open={authError}
        onRequestClose={clearError}
      >
        { authError ? decodeError(authError.code) : '' }
      </DefaultDialog>
    </div>)
}

SignupForm.propTypes = {
  signUp: PropTypes.func.isRequired,
  authLoading: PropTypes.bool.isRequired,
  authError: PropTypes.object,
  handleSubmit: PropTypes.func.isRequired,
  clearError: PropTypes.func.isRequired,
}

export default (SignupForm)
