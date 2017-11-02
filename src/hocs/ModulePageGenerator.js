import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { getModuleLocationColorScheme } from '@helpers/modules'
import ModulePage from '@routes/ModulePage'
import NotFoundModulePage from '@routes/NotFoundModulePage'

class ModulePageGenerator extends React.Component {
  static propTypes = {
    emitAction: PropTypes.func.isRequired,
    isLoadingModules: PropTypes.bool,
    module: PropTypes.object,
    data: PropTypes.object,
  }

  static defaultProps = {
    isLoadingModules: false,
    module: null,
    data: null,
  }

  render() {
    const {
      emitAction,
      isLoadingModules,
      data,
      module,
    } = this.props

    if (isLoadingModules) {
      return null
    }

    if (!module || !data) {
      return (<NotFoundModulePage />)
    }

    return (
      <ModulePage
        module={module}
        emitAction={emitAction}
        boxColors={getModuleLocationColorScheme(module.location)}
        humidity={data.get('humidity')}
        luminosity={data.get('luminosity')}
        opening={data.get('opening')}
        presence={data.get('presence') ? parseInt(data.get('presence'), 10) : null}
        temperature={data.get('temperature')}
        relay1={data.get('relay1') ? parseInt(data.get('relay1'), 10) : null}
        relay2={data.get('relay2') ? parseInt(data.get('relay2'), 10) : null}
        lastUpdatedAt={data.get('lastUpdatedAt')}
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  isLoadingModules: state.modules.get('isLoading'),
  module: state.modules.get('modules').get(ownProps.params.id),
  data: state.data.get(ownProps.params.id),
})

export default connect(mapStateToProps)(ModulePageGenerator)