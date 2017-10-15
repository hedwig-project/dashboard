import React, { PropTypes } from 'react'
import styled from 'styled-components'
import MenuItem from 'material-ui/MenuItem'
import {
  SelectField,
} from 'redux-form-material-ui'
import DefaultButton from '@components/DefaultButton'
import DefaultDialog from '@components/DefaultDialog'
import DefaultInputField from '@components/DefaultInputField'
import fonts from '@consts/fonts'
import colors from '@consts/colors'
import { objectToArray2 as objectToArray } from '@helpers/objectToArray'

const Header = styled.h2`
  font-size: ${fonts.large};
  color: ${colors.mainBlue};
  text-align: center;
  margin: 30px 0 0 0;
  font-weight: normal;
`

const AddModuleForm = ({
  addModule,
  morpheusOptions,
  moduleAdding,
  moduleError,
  handleSubmit,
  clearError,
}) => {
  const decodeError = () => ('Erro ao adicionar Módulo')

  return (
    <div>
      <Header>Adicionar Módulo</Header>
      <form onSubmit={handleSubmit(addModule)}>
        <div>
          <DefaultInputField
            name="name"
            floatingLabelText="Nome"
          />
        </div>
        <div>
          <DefaultInputField
            name="relay1"
            floatingLabelText="Relé 1"
          />
        </div>
        <div>
          <DefaultInputField
            name="relay2"
            floatingLabelText="Relé 2"
          />
        </div>
        <div>
          <DefaultInputField
            name="location"
            component={SelectField}
            floatingLabelText="Tipo"
          >
            <MenuItem value={'ACCESS'} primaryText="Acesso" />
            <MenuItem value={'AQUARIUM'} primaryText="Aquário" />
            <MenuItem value={'KITCHEN'} primaryText="Cozinha" />
            <MenuItem value={'LAUNDRY'} primaryText="Lavanderia" />
            <MenuItem value={'LIVING_ROOM'} primaryText="Sala" />
          </DefaultInputField>
        </div>
        <div>
          <DefaultInputField
            name="morpheusId"
            component={SelectField}
            floatingLabelText="Número de série do Morpheus"
          >
            { morpheusOptions && objectToArray(morpheusOptions).map((morpheus) => {
              return (
                <MenuItem value={morpheus._id} key={morpheus._id} primaryText={morpheus.serial} />)
            })}
          </DefaultInputField>
        </div>
        <div>
          <DefaultInputField
            name="serial"
            floatingLabelText="Número de série"
          />
        </div>
        <DefaultButton
          disabled={moduleAdding}
          label="Adicionar"
          type="submit"
        />
      </form>
      <DefaultDialog
        actions={[{ label: 'Ok', onTouchTap: clearError }]}
        title="Erro adicionando módulo"
        open={moduleError}
        onRequestClose={clearError}
      >
        { moduleError ? decodeError() : '' }
      </DefaultDialog>
    </div>)
}

AddModuleForm.propTypes = {
  addModule: PropTypes.func.isRequired,
  moduleAdding: PropTypes.bool.isRequired,
  morpheusOptions: PropTypes.object.isRequired,
  moduleError: PropTypes.array,
  handleSubmit: PropTypes.func.isRequired,
  clearError: PropTypes.func.isRequired,
}

export default (AddModuleForm)
