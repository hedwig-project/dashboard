import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import colors from '@consts/colors'
import hedwigLogo from '@images/hedwig_logo.png'
import style from './style'

const mapStateToProps = state => ({
  websiteType: state.auth.get('websiteType'),
  lessThanSmall: state.browser.lessThan.small,
})

class GuestLayout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    lessThanSmall: PropTypes.bool.isRequired,
  }

  render() {
    const {
      children,
      lessThanSmall,
    } = this.props

    const imageStyle = style.logoImage
    const backgroundStyle = { backgroundColor: colors.mainBlue }

    if (lessThanSmall) {
      style.guestContainer.width = '100%'
    } else {
      style.guestContainer.width = '400px'
    }

    return (
      <div style={Object.assign({}, style.guestPage, backgroundStyle)}>
        <div style={style.guestContainer}>
          <img
            src={hedwigLogo}
            style={imageStyle}
          />
        </div>
        <div style={style.guestContainer}>
          {children}
        </div>
      </div>
    )
  }
}

export default compose(
  connect(mapStateToProps),
)(GuestLayout)
