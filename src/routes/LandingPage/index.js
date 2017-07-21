import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import FlatButton from 'material-ui/FlatButton'
import Login from '@routes/LandingPage/containers/Login'
import SignUp from '@routes/LandingPage/containers/SignUp'
import ForgotPassword from '@routes/LandingPage/containers/ForgotPassword'
import hedwigLogo from '@images/hedwig_logo.png'

const Logo = styled.img`
  width: 25%;
`

const IntroText = styled.p`
  
`

const FirstWrapper = styled.div`
  float: left;
  text-align: center;
  width: ${props => (props.lessThanSmall ? '100%' : '50%')};
`

const SecondWrapper = styled.div`
  float: right;
  width: ${props => (props.lessThanSmall ? '100%' : '50%')};
`

const mapStateToProps = state => ({
  lessThanSmall: state.browser.lessThan.large,
})

class LandingPage extends Component {
  static propTypes = {
    lessThanSmall: PropTypes.bool.isRequired,
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
      lessThanSmall,
    } = this.props
    const {
      showLogin,
      showSignUp,
      showForgotPassword,
    } = this.state

    const flatButtonStyle = {
      width: '100%',
      margin: '10px 0',
      borderRadius: 10,
    }

    return (
      <div>
        <FirstWrapper lessThanSmall={lessThanSmall}>
          <Logo
            src={hedwigLogo}
          />
          <IntroText>Seja bem vindo ao Hedwig!</IntroText>
          <IntroText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Cras massa odio, tincidunt at scelerisque nec, tempus nec 
            velit. Nulla sed dictum magna. Aliquam sed lobortis nisl, 
            a scelerisque neque. Duis laoreet condimentum scelerisque. 
            Nulla hendrerit erat in lacus sollicitudin, 
            eu aliquet mi tincidunt.
          </IntroText>
        </FirstWrapper>
        <SecondWrapper lessThanSmall={lessThanSmall}>
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
          <div>
            { !showLogin && (
              <FlatButton
                label="Voltar para login"
                style={flatButtonStyle}
                labelStyle={{ textTransform: 'none' }}
                onClick={this.goToLogin}
              />
            )}
            { !showSignUp && (
              <FlatButton
                label="Não possuo conta"
                style={flatButtonStyle}
                labelStyle={{ textTransform: 'none' }}
                onClick={this.goToSignUp}
              />
            )}
            { !showForgotPassword && (
              <FlatButton
                label="Esqueci minha senha"
                style={flatButtonStyle}
                labelStyle={{ textTransform: 'none' }}
                onClick={this.goToForgotPassword}
              />
            )}
          </div>
        </SecondWrapper>
      </div>
    )
  }
}

export default connect(mapStateToProps)(LandingPage)
