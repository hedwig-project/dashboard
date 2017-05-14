import { push } from 'react-router-redux'
import { connect } from 'react-redux'
import { compose } from 'redux'
import ForgotPasswordForm from '@modules/auth/components/ForgotPasswordForm'
import { setResetPasswordMessage, clearResetPasswordMessage } from '@modules/auth/actions/authActions.js'

const mapDispatchToProps = dispatch => ({
  forgotPassword({ email }) {
    // firebase.auth().sendPasswordResetEmail(email).then(() => {
    //   dispatch(setResetPasswordMessage({ success: true, message: 'Email enviado' }))
    // }, (error) => {
    //   let message = 'Ocorreu um erro desconhecido, tente novamente'
    //   if (error.code === 'auth/invalid-email') {
    //     message = 'Email inválido'
    //   } else if (error.code === 'auth/user-not-found') {
    //     message = 'Usuário não encontrado'
    //   }
    //   dispatch(setResetPasswordMessage({ success: false, message }))
    // })
    console.log('pedido de renovacao de senha recebido, email', email)
  },
  closeDialog(success) {
    dispatch(clearResetPasswordMessage())
    if (success) {
      dispatch(push('/login'))
    }
  },
})

const mapStateToProps = state => ({
  authLoading: state.auth.get('authLoading'),
  resetPasswordMessage: state.auth.get('resetPasswordMessage'),
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(ForgotPasswordForm)
