import React, { PropTypes } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import styled from 'styled-components'
import colors from '@consts/colors'

const StyledButton = styled(RaisedButton)`
  button {
    background-color: ${props => props.secondary ?
      colors.secondaryButtonColor :
      colors.primaryButtonColor
    } !important;
  }
`
StyledButton.PropTypes = {
  secondary: PropTypes.bool,
}
StyledButton.defaultProps = {
  secondary: 'false',
}

const DefaultButton = ({
  secondary,
  textTransform,
  disabled,
  label,
  buttonHeight,
  margin,
  onClick,
  onTouchTap,
}) => {
  const style = {
    style: {
      width: '100%',
      marginTop: '30px',
      color: 'white',
      fontWeight: 'bold',
      marginBottom: '30px',
      borderRadius: 10,
    },
    buttonStyle: {
      borderRadius: 10,
    },
    overlayStyle: {
      borderRadius: 10,
    },
    labelStyle: {
      textTransform,
      color: 'white',
    },
  }

  if (margin && margin !== '') {
    style.style.margin = margin
  }
  if (buttonHeight && buttonHeight !== '') {
    style.buttonStyle.height = buttonHeight
    style.buttonStyle.lineHeight = buttonHeight
    style.overlayStyle.height = buttonHeight
  }

  return (
    <StyledButton
      secondary={secondary}
      style={style.style}
      buttonStyle={style.buttonStyle}
      labelStyle={style.labelStyle}
      overlayStyle={style.overlayStyle}
      disabled={disabled}
      label={label}
      onClick={onClick || undefined}
      onTouchTap={onTouchTap || undefined}
      type={onClick || onTouchTap ? undefined : 'submit'}
    />
  )
}

DefaultButton.propTypes = {
  secondary: PropTypes.bool,
  textTransform: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  buttonHeight: PropTypes.string,
  margin: PropTypes.string,
  onClick: PropTypes.func,
  onTouchTap: PropTypes.func,
};

DefaultButton.defaultProps = {
  secondary: false,
  textTransform: 'none',
  disabled: false,
  label: ' ',
  margin: '',
  buttonHeight: '',
};

export default DefaultButton
