import { Card } from 'material-ui/Card'
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import FlatButton from 'material-ui/FlatButton'
import Login from '@routes/LandingPage/containers/Login'
import SignUp from '@routes/LandingPage/containers/SignUp'
import ForgotPassword from '@routes/LandingPage/containers/ForgotPassword'
import hedwigLogo from '@images/hedwig2-1.png'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  background-color: #42A5F5;
  padding: ${props => (props.lessThanMedium ? '10px 30px' : '10px 0')};
`

const LogoWrapper = styled.div`
  position: absolute;
  width: 100px;
  top: -125px;
  right: 5px;
  z-index: 100;
`

const Logo = styled.img`
  width: 100px;
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  width: ${props => (props.lessThanMedium ? '100%' : '33.3%')};
  margin-top: 110px;
`

const FormContainer = styled.div`
  padding: 15px;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 15px;
`

const mapStateToProps = state => ({
  lessThanMedium: state.browser.lessThan.medium,
})

class LandingPage extends Component {
  static propTypes = {
    lessThanMedium: PropTypes.bool.isRequired,
  }

  constructor(props) {
    super(props)

    this.state = {
      showLogin: true,
      showSignUp: false,
      showForgotPassword: false,
    }

    this.goToLogin = this.goToLogin.bind(this)
    this.goToSignUp = this.goToSignUp.bind(this)
    this.goToForgotPassword = this.goToForgotPassword.bind(this)
  }

  goToLogin() {
    this.setState({
      showLogin: true,
      showSignUp: false,
      showForgotPassword: false,
    })
  }

  goToSignUp() {
    this.setState({
      showLogin: false,
      showSignUp: true,
      showForgotPassword: false,
    })
  }

  goToForgotPassword() {
    this.setState({
      showLogin: false,
      showSignUp: false,
      showForgotPassword: true,
    })
  }

  render() {
    const {
      lessThanMedium,
    } = this.props
    const {
      showLogin,
      showSignUp,
      showForgotPassword,
    } = this.state

    return (
      <Wrapper lessThanMedium={lessThanMedium}>
        <ContentWrapper lessThanMedium={lessThanMedium}>
          <LogoWrapper lessThanMedium={lessThanMedium}>
            <Logo src={hedwigLogo} />
          </LogoWrapper>
          <Card>
            <FormContainer>
              { showLogin && (
                <Login
                  goToForgotPassword={this.goToForgotPassword}
                  goToSignUp={this.goToSignUp}
                />
              )}
              { showSignUp && (
                <SignUp
                  goToLogin={this.goToLogin}
                  goToForgotPassword={this.goToForgotPassword}
                />
              )}
              { showForgotPassword && (
                <ForgotPassword
                  goToLogin={this.goToLogin}
                  goToSignUp={this.goToSignUp}
                />
              )}
            </FormContainer>
            <ButtonContainer>
              { !showLogin && (
                <FlatButton
                  label="Voltar para login"
                  labelStyle={{ textTransform: 'none' }}
                  onClick={this.goToLogin}
                />
              )}
              { !showSignUp && (
                <FlatButton
                  label="Não possuo conta"
                  labelStyle={{ textTransform: 'none' }}
                  onClick={this.goToSignUp}
                />
              )}
              { !showForgotPassword && (
                <FlatButton
                  label="Esqueci minha senha"
                  labelStyle={{ textTransform: 'none' }}
                  onClick={this.goToForgotPassword}
                />
              )}
            </ButtonContainer>
          </Card>
        </ContentWrapper>
      </Wrapper>
    )
  }
}

export default connect(mapStateToProps)(LandingPage)
