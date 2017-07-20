import React, { PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'
import { TextField } from 'redux-form-material-ui'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import Dialog from 'material-ui/Dialog'
import style from './styles'

const ForgotPasswordForm = ({
  forgotPassword,
  authLoading,
  resetPasswordMessage,
  handleSubmit,
  closeDialog,
}) => {
  const actions = [
    <FlatButton
      label="Ok"
      primary
      onTouchTap={() => closeDialog(resetPasswordMessage.success)}
    />,
  ]

  const customContentStyle = {
    width: '30%',
    minWidth: '220px',
  }

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
      <h1 style={style.title}>Esqueci Minha Senha</h1>
      <form onSubmit={handleSubmit(forgotPassword)}>
        <div>
          <Field
            name="email"
            style={style.inputField}
            component={TextField}
            floatingLabelText="Email"
          />
        </div>
        <RaisedButton
          style={style.submitButtonExternal}
          buttonStyle={style.submitButton}
          labelStyle={{ textTransform: 'none', color: 'white' }}
          disabled={authLoading}
          label="Recuperar Senha"
          type="submit"
        />
      </form>
      <Dialog
        title={defineTitle()}
        contentStyle={customContentStyle}
        actions={actions}
        modal={false}
        open={resetPasswordMessage}
        onRequestClose={() => closeDialog(resetPasswordMessage.success)}
      >
        { resetPasswordMessage ? resetPasswordMessage.message : '' }
      </Dialog>
    </div>)
}

ForgotPasswordForm.propTypes = {
  forgotPassword: PropTypes.func.isRequired,
  authLoading: PropTypes.bool.isRequired,
  resetPasswordMessage: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  closeDialog: PropTypes.func.isRequired,
}

export default reduxForm({
  form: 'ForgotPasswordForm',
})(ForgotPasswordForm)
