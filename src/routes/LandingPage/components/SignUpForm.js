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
  authFetching,
  handleSubmit,
  authError,
  clearError,
}) => {
  const decodeError = (errorCode) => {
    if (errorCode[0] === 'BLANK_USERNAME') {
      return 'O campo de nome de usuário deve estar preenchido'
    } else if (errorCode[0] === 'BLANK_NAME') {
      return 'O campo de nome deve estar preenchido'
    } else if (errorCode[0] === 'BLANK_EMAIL') {
      return 'O campo de email deve estar preenchido'
    } else if (errorCode[0] === 'INVALID_EMAIL') {
      return 'Email inválido'
    } else if (errorCode[0] === 'BLANK_PASSWORD') {
      return 'O campo de senha deve estar preenchido'
    } else if (errorCode[0] === 'BLANK_BIRTHDAY') {
      return 'O campo de data de nascimento deve estar preenchido'
    }
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
          disabled={authFetching}
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
        { authError ? decodeError(authError) : '' }
      </DefaultDialog>
    </div>)
}

SignupForm.propTypes = {
  signUp: PropTypes.func.isRequired,
  authFetching: PropTypes.bool.isRequired,
  authError: PropTypes.array,
  handleSubmit: PropTypes.func.isRequired,
  clearError: PropTypes.func.isRequired,
}

export default (SignupForm)
