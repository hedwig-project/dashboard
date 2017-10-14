import React, { PropTypes } from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'

const DefaultDialog = ({
  actions,
  title,
  open,
  onRequestClose,
  children,
}) => {
  const contentStyle = {
    width: '30%',
    minWidth: '220px',
  }

  const actionButtons = actions.map(action => (
    <FlatButton
      label={action.label}
      primary={!action.secondary}
      onTouchTap={action.onTouchTap}
    />
  ))

  return (
    <Dialog
      title={title}
      contentStyle={contentStyle}
      actions={actionButtons}
      modal={false}
      open={open}
      onRequestClose={onRequestClose}
    >
      { children }
    </Dialog>
  )
}

DefaultDialog.propTypes = {
  actions: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
}

export default DefaultDialog
