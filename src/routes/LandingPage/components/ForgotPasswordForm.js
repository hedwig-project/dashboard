import RaisedButton from 'material-ui/RaisedButton'
import React, { PropTypes } from 'react'
import styled from 'styled-components'
import DefaultDialog from '@components/DefaultDialog'
import DefaultInputField from '@components/DefaultInputField'
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
    <Wrapper>
      <Header>Esqueci Minha Senha</Header>
      <form onSubmit={handleSubmit(forgotPassword)}>
        <DefaultInputField
          name="email"
          type="email"
          floatingLabelText="Email"
        />
        <ButtonWrapper>
          <RaisedButton
            disabled={authLoading}
            label="Recuperar Senha"
            primary
            style={{ margin: '15px 0' }}
            type="submit"
          />
        </ButtonWrapper>
      </form>
      <DefaultDialog
        actions={[{ label: 'Ok', onTouchTap: () => closeDialog(resetPasswordMessage.success) }]}
        title={defineTitle()}
        open={resetPasswordMessage}
        onRequestClose={() => closeDialog(resetPasswordMessage.success)}
      >
        { resetPasswordMessage ? resetPasswordMessage.message : '' }
      </DefaultDialog>
    </Wrapper>)
}

ForgotPasswordForm.propTypes = {
  forgotPassword: PropTypes.func.isRequired,
  authLoading: PropTypes.bool.isRequired,
  resetPasswordMessage: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  closeDialog: PropTypes.func.isRequired,
}

ForgotPasswordForm.defaultProps = {
  resetPasswordMessage: '',
}

export default (ForgotPasswordForm)
