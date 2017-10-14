import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { getModuleLocationColorScheme } from '@helpers/modules'
import ModulePage from '@routes/ModulePage'
import NotFoundModule from '@routes/NotFoundModule'

class ModulePageGenerator extends React.Component {
  static propTypes = {
    module: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
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
  module: state.modules.toJS()[ownProps.params.id],
  data: state.data.toJS()[ownProps.params.id],
})

export default connect(mapStateToProps)(ModulePageGenerator)
