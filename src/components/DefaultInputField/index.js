import React, { PropTypes } from 'react'
import { Field } from 'redux-form'
import { TextField } from 'redux-form-material-ui'

const DefaultInputField = ({
  name,
  floatingLabelText,
  component,
  children,
  disabled,
  normalize,
  type,
}) => (
  <Field
    disabled={disabled}
    style={{ width: '100%', height: '52px' }}
    floatingLabelStyle={{ top: '18px' }}
    inputStyle={{ backgroundColor: 'white', marginTop: '2px' }}
    errorStyle={{ bottom: '8px' }}
    component={component || TextField}
    children={children}
    name={name}
    floatingLabelText={floatingLabelText}
    normalize={normalize}
    type={type}
  />
)

DefaultInputField.propTypes = {
  name: PropTypes.string.isRequired,
  floatingLabelText: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  normalize: PropTypes.func,
  floatingLabelText: PropTypes.string,
}

export default DefaultInputField
