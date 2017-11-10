import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { getModuleLocationColorScheme } from '@helpers/modules'
import ModulePage from '@routes/ModulePage'
import NotFoundModulePage from '@routes/NotFoundModulePage'

class ModulePageGenerator extends React.Component {
  static propTypes = {
    lessThanLarge: PropTypes.bool.isRequired,
    emitAction: PropTypes.func.isRequired,
    emitConfiguration: PropTypes.func.isRequired,
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
      lessThanLarge,
      emitAction,
      emitConfiguration,
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
        emitConfiguration={emitConfiguration}
        boxColors={getModuleLocationColorScheme(module.location)}
        humidity={data.get('humidity')}
        luminosity={data.get('luminosity')}
        opening={data.get('opening') ? parseInt(data.get('opening'), 10) : null}
        presence={data.get('presence') ? parseInt(data.get('presence'), 10) : null}
        temperature={data.get('temperature')}
        relay1={data.get('relay1') ? parseInt(data.get('relay1'), 10) : null}
        relay1Name={
          module.components && module.components.relay1 ?
          module.components.relay1.name : undefined}
        relay2={data.get('relay2') ? parseInt(data.get('relay2'), 10) : null}
        relay2Name={
          module.components && module.components.relay2 ?
          module.components.relay2.name : undefined}
        lastUpdatedAt={data.get('lastUpdatedAt')}
        gate={data.get('gate') ? parseInt(data.get('gate'), 10) : null}
        alarm={data.get('alarm') ? parseInt(data.get('alarm'), 10) : null}
        alarmLastChange={data.get('alarmLastChange') ? parseInt(data.get('alarmLastChange'), 10) : null}
        lessThanLarge={lessThanLarge}
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  lessThanLarge: state.browser.lessThan.large,
  isLoadingModules: state.modules.get('isLoading'),
  module: state.modules.get('modules').get(ownProps.params.id),
  data: state.data.get(ownProps.params.id),
})

export default connect(mapStateToProps)(ModulePageGenerator)
