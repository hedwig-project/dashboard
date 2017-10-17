import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { getModuleLocationColorScheme } from '@helpers/modules'
import ModulePage from '@routes/ModulePage'
import NotFoundModule from '@routes/NotFoundModule'

class ModulePageGenerator extends React.Component {
  static propTypes = {
    module: PropTypes.object,
    data: PropTypes.object,
  }

  static defaultProps = {
    module: null,
    data: null,
  }

  render() {
    const {
      data,
      module,
    } = this.props

    if (!module || !data) {
      return (<NotFoundModule />)
    }

    return (
      <ModulePage
        boxColors={getModuleLocationColorScheme(module.location)}
        humidity={data.humidity}
        luminosity={data.luminosity}
        opening={data.opening}
        presence={data.presence}
        temperature={data.temperature}
        relay1={data.relay1}
        relay2={data.relay2}
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  module: state.modules.get('modules').get(ownProps.params.id),
  data: state.data.get(ownProps.params.id),
})

export default connect(mapStateToProps)(ModulePageGenerator)
