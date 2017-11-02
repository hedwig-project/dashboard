import Divider from 'material-ui/Divider'
import MenuItem from 'material-ui/MenuItem'
import SelectField from 'material-ui/SelectField';
import React, { PropTypes } from 'react'
import styled from 'styled-components'
import DefaultDialog from '@components/DefaultDialog'
import { objectToArray2 as objectToArray } from '@helpers/objectToArray'
import MorpheusSettingsForm from '@routes/DeviceSettingsPage/containers/MorpheusSettingsForm'
import MorpheusRemove from '@routes/DeviceSettingsPage/containers/MorpheusRemove'
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

class MorpheusSettings extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      morpheusId: props.serial ? this.getMorpheusIdBySerial(props.serial) : null,
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      morpheusId: nextProps.serial ? this.getMorpheusIdBySerial(nextProps.serial) : null,
    })
  }

  getMorpheusIdBySerial = (serial) => {
    const result = objectToArray(this.props.morpheusList)
      .filter(morpheus => morpheus.serial === serial)

    if (result[0]) {
      return result[0]._id
    }
    return null
  }

  getMorpheusSerialById = (id) => {
    const result = objectToArray(this.props.morpheusList)
      .filter(morpheus => morpheus._id === id)

    if (result[0]) {
      return result[0].serial
    }

    return null
  }

  handleChange = (event, index, morpheusId) => {
    this.props.changeMorpheus(this.getMorpheusSerialById(morpheusId))
  }

  render() {
    const {
      morpheusList,
      morpheusError,
      clearError,
    } = this.props
    const decodeError = () => ('Erro ao adicionar Morpheus')

    return (
      <Wrapper>
        <Header>Gerenciar Morpheus</Header>
        <SelectField
          floatingLabelText="Número de série do Morpheus"
          value={this.state.morpheusId}
          onChange={this.handleChange}
          style={{ width: '100%' }}
        >
          {
            morpheusList &&
            Object.keys(morpheusList).length > 0 &&
            objectToArray(morpheusList).map(item =>
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
          this.state.morpheusId &&
          <MorpheusSettingsForm
            id={this.state.morpheusId}
            serial={this.getMorpheusSerialById(this.state.morpheusId)}
          />
        }
        {
          this.state.morpheusId && <Divider />
        }
        {
          this.state.morpheusId &&
          <MorpheusRemove
            id={this.state.morpheusId}
            serial={this.getMorpheusSerialById(this.state.morpheusId)}
          />
        }
        <DefaultDialog
          actions={[{ label: 'Ok', onTouchTap: clearError }]}
          title="Erro"
          open={morpheusError}
          onRequestClose={clearError}
        >
          { morpheusError ? decodeError() : '' }
        </DefaultDialog>
      </Wrapper>
    )
  }
}

MorpheusSettings.propTypes = {
  changeMorpheus: PropTypes.func.isRequired,
  morpheusList: PropTypes.object,
  morpheusError: PropTypes.array,
  serial: PropTypes.string,
  clearError: PropTypes.func.isRequired,
}

MorpheusSettings.defaultProps = {
  morpheusList: null,
  morpheusError: [],
  serial: null,
}

export default MorpheusSettings
