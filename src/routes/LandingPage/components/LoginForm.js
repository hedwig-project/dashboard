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

const LoginForm = ({
  login,
  authFetching,
  authError,
  handleSubmit,
  clearError,
}) => {
  const decodeError = () => ('Login inválido')

  return (
    <Wrapper>
      <Header>Login</Header>
      <form onSubmit={handleSubmit(login)}>
        <DefaultInputField
          name="username"
          floatingLabelText="Username"
        />
        <DefaultInputField
          name="password"
          type="password"
          floatingLabelText="Senha"
        />
        <ButtonWrapper>
          <RaisedButton
            disabled={authFetching}
            label="Entrar"
            primary
            style={{ margin: '15px 0' }}
            type="submit"
          />
        </ButtonWrapper>
      </form>
      <DefaultDialog
        actions={[{ label: 'Ok', onTouchTap: clearError }]}
        title="Login inválido"
        open={authError && authError.length > 0}
        onRequestClose={clearError}
      >
        { authError && authError.length > 0 ? decodeError() : '' }
      </DefaultDialog>
    </Wrapper>)
}

LoginForm.propTypes = {
  login: PropTypes.func.isRequired,
  authFetching: PropTypes.bool.isRequired,
  authError: PropTypes.array,
  handleSubmit: PropTypes.func.isRequired,
  clearError: PropTypes.func.isRequired,
}

LoginForm.defaultProps = {
  authError: [],
}

export default (LoginForm)
