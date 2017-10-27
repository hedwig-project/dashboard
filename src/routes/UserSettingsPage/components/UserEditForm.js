import RaisedButton from 'material-ui/RaisedButton'
import React, { PropTypes } from 'react'
import styled from 'styled-components'
import DefaultDialog from '@components/DefaultDialog'
import DefaultInputField from '@components/DefaultInputField'
import { normalizeDate } from '@helpers/normalizers'
import fonts from '@consts/fonts'
import colors from '@consts/colors'

const Wrapper = styled.div`
  margin-top: 20px;
`

const Header = styled.h2`
  font-size: ${fonts.large};
  color: ${colors.mainBlue};
  text-align: center;
  font-weight: normal;
  margin-bottom: 10px;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const UserEditForm = ({
  editSettings,
  isEditing,
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
    <Wrapper>
      <Header>Alterar Informações</Header>
      <form onSubmit={handleSubmit(editSettings)}>
        <DefaultInputField
          name="email"
          type="email"
          floatingLabelText="Email"
        />
        <DefaultInputField
          name="username"
          floatingLabelText="Nome de usuário"
        />
        <DefaultInputField
          name="name"
          floatingLabelText="Nome"
        />
        <DefaultInputField
          name="birthday"
          floatingLabelText="Data de nascimento (DD/MM/AAAA)"
          normalize={normalizeDate}
        />
        <DefaultInputField
          name="password"
          type="password"
          floatingLabelText="Senha"
        />
        <DefaultInputField
          name="newPassword"
          type="password"
          floatingLabelText="Nova senha"
        />
        <DefaultInputField
          name="newPasswordConfirmation"
          type="password"
          floatingLabelText="Confirme a nova senha"
        />
        <ButtonWrapper>
          <RaisedButton
            disabled={isEditing}
            label="Atualizar"
            primary
            style={{ margin: '15px 0' }}
            type="submit"
          />
        </ButtonWrapper>
      </form>
      <DefaultDialog
        actions={[{ label: 'Ok', onTouchTap: clearError }]}
        title="Informações inválidas"
        open={authError.length > 0}
        onRequestClose={clearError}
      >
        { authError.length > 0 ? decodeError(authError) : '' }
      </DefaultDialog>
    </Wrapper>)
}

UserEditForm.propTypes = {
  editSettings: PropTypes.func.isRequired,
  isEditing: PropTypes.bool.isRequired,
  authError: PropTypes.array,
  handleSubmit: PropTypes.func.isRequired,
  clearError: PropTypes.func.isRequired,
}

UserEditForm.defaultProps = {
  authError: [],
}

export default (UserEditForm)
