import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import colors from '@consts/colors'
import hedwigLogo from '@images/hedwig_logo.png'
import style from './style'

const mapStateToProps = state => ({
  lessThanSmall: state.browser.lessThan.small,
})

class AuthorizedLayout extends React.Component {
  static propTypes = {
    lessThanSmall: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
  }

  render() {
    const {
      lessThanSmall,
      children,
    } = this.props

    const backgroundStyle = { backgroundColor: colors.mainRed }
    const imageStyle = style.logoImage

    if (lessThanSmall) {
      style.authorizedContainer.width = '100%'
    } else {
      style.authorizedContainer.width = '400px'
    }

    return (
      <div style={Object.assign({}, style.authorizedPage, backgroundStyle)}>
        <div style={style.authorizedContainer}>
          <img
            src={hedwigLogo}
            style={imageStyle}
          />
        </div>
        <div style={style.authorizedContainer}>
          {children}
        </div>
      </div>
    )
  }
}

export default compose(
  connect(mapStateToProps),
)(AuthorizedLayout)
