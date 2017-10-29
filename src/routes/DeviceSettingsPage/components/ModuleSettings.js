import MenuItem from 'material-ui/MenuItem'
import SelectField from 'material-ui/SelectField';
import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { objectToArray2 as objectToArray } from '@helpers/objectToArray'
import ModuleSettingsForm from '@routes/DeviceSettingsPage/containers/ModuleSettingsForm'
import fonts from '@consts/fonts'
import colors from '@consts/colors'

const Wrapper = styled.div`
  margin: 20px 0;
  padding: 0 10px;
`

const Header = styled.h2`
  font-size: ${fonts.large};
  color: ${colors.mainBlue};
  text-align: center;
  font-weight: normal;
  margin-bottom: 10px;
`

class ModuleSettings extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      moduleId: props.serial ? this.getModuleIdBySerial(props.serial) : null,
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      moduleId: nextProps.serial ? this.getModuleIdBySerial(nextProps.serial) : null,
    })
  }

  getModuleIdBySerial = (serial) => {
    const result = objectToArray(this.props.moduleList)
      .filter(module => module.serial === serial)

    if (result[0]) {
      return result[0]._id
    }
    return null
  }

  getModuleSerialById = (id) => {
    const result = objectToArray(this.props.moduleList)
      .filter(module => module._id === id)

    if (result[0]) {
      return result[0].serial
    }

    return null
  }

  handleChange = (event, index, moduleId) => {
    this.props.changeModule(this.getModuleSerialById(moduleId))
  }

  render() {
    const {
      moduleList,
    } = this.props

    return (
      <Wrapper>
        <Header>Gerenciar módulos</Header>
        <SelectField
          floatingLabelText="Número de série do módulo"
          value={this.state.moduleId}
          onChange={this.handleChange}
          style={{ width: '100%' }}
        >
          {
            moduleList &&
            Object.keys(moduleList).length > 0 &&
            objectToArray(moduleList).map(item =>
              (
                <MenuItem
                  value={item._id}
                  key={item._id}
                  primaryText={item.serial}
                />
              ),
            )
          }
        </SelectField>
        {
          this.state.moduleId &&
          <ModuleSettingsForm
            id={this.state.moduleId}
            serial={this.getModuleSerialById(this.state.moduleId)}
          />
        }
      </Wrapper>
    )
  }
}

ModuleSettings.propTypes = {
  changeModule: PropTypes.func.isRequired,
  moduleList: PropTypes.object,
  serial: PropTypes.string,
}

ModuleSettings.defaultProps = {
  moduleList: null,
  serial: null,
}

export default ModuleSettings
