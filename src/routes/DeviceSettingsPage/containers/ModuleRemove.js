import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import ModuleRemove from '@routes/DeviceSettingsPage/components/ModuleRemove'
import * as moduleActions from '@modules/modules/actions'

const mapDispatchToProps = dispatch => ({
  deleteModule(module) {
    dispatch(moduleActions.deleteModule(module))
      .then((success) => {
        if (success) {
          dispatch(push('/device-settings/module'))
        }
      })
  },
})

const mapStateToProps = (state, ownProps) => ({
  module: ownProps.serial ? state.modules.get('modules').get(ownProps.serial) : null,
  moduleRemoving: state.modules.get('isRemoving'),
})

export default connect(mapStateToProps, mapDispatchToProps)(ModuleRemove)
