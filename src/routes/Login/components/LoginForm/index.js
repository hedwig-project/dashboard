import React, { PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'
import { TextField } from 'redux-form-material-ui'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import Dialog from 'material-ui/Dialog'
import withNavigation from '@hocs/withNavigation'
import validator from '@helpers/validator'
import Joi from 'joi-full'
import style from './styles'

const schema = Joi.object({
  email: Joi.string().email().required().label('E-mail'),
  password: Joi.string().required().label('Senha'),
})

const validate = values => validator(values, schema)

const LoginForm = ({
  loginWithPassword,
  authLoading,
  authError,
  handleSubmit,
  goTo,
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
    // } else if (errorCode === 'auth/user-not-found' || errorCode === 'auth/wrong-password') {
    //   return 'Usuário ou senha errados'
    // }
    return 'Ocorreu um erro desconhecido, tente novamente'
  }

  return (
    <div>
      <h1 style={style.login}>Login</h1>
      <form onSubmit={handleSubmit(loginWithPassword)}>
        <div>
          <Field
            name="email"
            style={style.inputFieldUnauthorized}
            inputStyle={{ backgroundColor: 'white' }}
            component={TextField}
            floatingLabelText="Email"
          />
        </div>
        <div>
          <Field
            name="password"
            type="password"
            style={style.inputFieldUnauthorized}
            inputStyle={{ backgroundColor: 'white' }}
            component={TextField}
            floatingLabelText="Senha"
          />
        </div>
        <div>
          <FlatButton
            label="Esqueci minha senha"
            style={style.forgotPasswordButton}
            labelStyle={{ textTransform: 'none' }}
            onClick={() => goTo('/esqueci-senha')}
          />
        </div>
        <RaisedButton
          disabled={authLoading}
          style={style.loginButtonExternal}
          buttonStyle={style.loginButton}
          labelStyle={{ textTransform: 'none', color: 'white' }}
          label="Entrar"
          type="submit"
        />
      </form>
      <Dialog
        title="Login inválido"
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

LoginForm.propTypes = {
  loginWithPassword: PropTypes.func.isRequired,
  authLoading: PropTypes.bool.isRequired,
  authError: PropTypes.object,
  handleSubmit: PropTypes.func.isRequired,
  goTo: PropTypes.func.isRequired,
  clearError: PropTypes.func.isRequired,
}

export default reduxForm({
  form: 'LoginForm',
  validate,
})(withNavigation(LoginForm))
