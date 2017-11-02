import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import MorpheusRemove from '@routes/DeviceSettingsPage/components/MorpheusRemove'
import * as morpheusActions from '@modules/morpheus/actions'

const mapDispatchToProps = dispatch => ({
  deleteMorpheus(morpheus) {
    dispatch(morpheusActions.deleteMorpheus(morpheus))
      .then((success) => {
        if (success) {
          dispatch(push('/device-settings/morpheus'))
        }
      })
  },
})

const mapStateToProps = (state, ownProps) => ({
  morpheus: ownProps.serial ? state.morpheus.get('morpheus').get(ownProps.serial) : null,
  morpheusRemoving: state.morpheus.get('isRemoving'),
})

export default connect(mapStateToProps, mapDispatchToProps)(MorpheusRemove)
