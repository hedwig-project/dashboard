import React, { PropTypes } from 'react'
import { Field } from 'redux-form'
import { TextField } from 'redux-form-material-ui'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import Dialog from 'material-ui/Dialog'
import { normalizeDate } from '@helpers/normalizers'
import style from './styles'

const SignupForm = ({
  signUp,
  authLoading,
  handleSubmit,
  authError,
  clearError,
}) => {
  const actions = [
    <FlatButton
      label="Ok"
      primary
      onTouchTap={clearError}
    />,
  ]

  const customContentStyle = {
    width: '30%',
    minWidth: '220px',
  }

  const translateError = (errorCode) => {
    // TODO
    // if (errorCode === 'auth/invalid-email') {
    //   return 'Email inválido'
    // } else if (errorCode === 'auth/email-already-in-use') {
    //   return 'Email já está sendo usado'
    // }
    return 'Ocorreu um erro desconhecido, tente novamente'
  }

  return (
    <div>
      <h1 style={style.title}>Cadastro</h1>
      <form onSubmit={handleSubmit(signUp)}>
        <div>
          <Field
            name="email"
            style={style.inputField}
            component={TextField}
            floatingLabelText="Email do paciente"
          />
        </div>
        <div>
          <Field
            name="username"
            style={style.inputField}
            component={TextField}
            floatingLabelText="Username"
          />
        </div>
        <div>
          <Field
            name="name"
            style={style.inputField}
            component={TextField}
            floatingLabelText="Nome"
          />
        </div>
        <div>
          <Field
            name="birthDate"
            style={style.inputField}
            component={TextField}
            floatingLabelText="Data de nascimento"
            normalize={normalizeDate}
          />
        </div>
        <div>
          <Field
            name="password"
            type="password"
            style={style.inputField}
            component={TextField}
            floatingLabelText="Senha"
          />
        </div>
        <div>
          <Field
            name="passwordConfirm"
            type="password"
            style={style.inputField}
            component={TextField}
            floatingLabelText="Confirme a Senha"
          />
        </div>
        <RaisedButton
          style={style.submitButtonExternal}
          buttonStyle={style.submitButton}
          labelStyle={{ textTransform: 'none', color: 'white' }}
          disabled={authLoading}
          label="Cadastrar"
          type="submit"
        />
      </form>
      <Dialog
        title="Cadastro inválido"
        contentStyle={customContentStyle}
        actions={actions}
        modal={false}
        open={authError}
        onRequestClose={clearError}
      >
        { authError ? translateError(authError.code) : '' }
      </Dialog>
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
