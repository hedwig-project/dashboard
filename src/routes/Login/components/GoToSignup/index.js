import React, {
  Component,
  PropTypes,
} from 'react'
import FlatButton from 'material-ui/FlatButton'
import style from './styles'

export default class GoToSignup extends Component {
  static propTypes = {
    goToSignup: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      goToSignup,
    } = this.props

    return (
      <div className="margin-top">
        <FlatButton
          label="Não tenho cadastro!"
          style={style.signupButton}
          labelStyle={{ textTransform: 'none' }}
          onClick={() => goToSignup()}
        />
      </div>
    );
  }
}
