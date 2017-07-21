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

const ForgotPasswordForm = ({
  forgotPassword,
  authLoading,
  resetPasswordMessage,
  handleSubmit,
  closeDialog,
}) => {
  const defineTitle = () => {
    if (resetPasswordMessage) {
      if (resetPasswordMessage.success) {
        return 'Sucesso'
      }
      return 'Email não enviado'
    }
    return ''
  }

  return (
    <div>
      <Header>Esqueci Minha Senha</Header>
      <form onSubmit={handleSubmit(forgotPassword)}>
        <div>
          <DefaultInputField
            name="email"
            floatingLabelText="Email"
          />
        </div>
        <DefaultButton
          disabled={authLoading}
          label="Recuperar Senha"
          type="submit"  // TODO check if default button needs to explicity repass type
        />
      </form>
      <DefaultDialog
        actions={[{ label: 'Ok', onTouchTap: () => closeDialog(resetPasswordMessage.success) }]}
        title={defineTitle()}
        open={resetPasswordMessage}
        onRequestClose={() => closeDialog(resetPasswordMessage.success)}
      >
        { resetPasswordMessage ? resetPasswordMessage.message : '' }
      </DefaultDialog>
    </div>)
}

ForgotPasswordForm.propTypes = {
  forgotPassword: PropTypes.func.isRequired,
  authLoading: PropTypes.bool.isRequired,
  resetPasswordMessage: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  closeDialog: PropTypes.func.isRequired,
}

export default (ForgotPasswordForm)
