import RaisedButton from 'material-ui/RaisedButton'
import React, { PropTypes } from 'react'
import styled from 'styled-components'
import MenuItem from 'material-ui/MenuItem'
import {
  SelectField,
} from 'redux-form-material-ui'
import DefaultDialog from '@components/DefaultDialog'
import DefaultInputField from '@components/DefaultInputField'
import fonts from '@consts/fonts'
import colors from '@consts/colors'
import { encodeModuleRegistrationMessage } from '@helpers/morpheus'
import { objectToArray2 as objectToArray } from '@helpers/objectToArray'

const Wrapper = styled.div`
  margin-top: 20px;
  padding: 0 10px;
`

const Header = styled.h2`
  font-size: ${fonts.large};
  color: ${colors.mainBlue};
  text-align: center;
  font-weight: normal;
  margin-bottom: 10px;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const AddModuleForm = ({
  addModule,
  emitConfiguration,
  morpheusOptions,
  moduleAdding,
  moduleError,
  handleSubmit,
  clearError,
}) => {
  const onSubmit = (data) => {
    addModule(data)
    emitConfiguration(
      objectToArray(morpheusOptions)
        .filter(morpheus => morpheus._id === data.morpheusId)
        .map(morpheus => morpheus.serial)[0],
      encodeModuleRegistrationMessage(data),
    )
  }

  const decodeError = () => ('Erro ao adicionar módulo')

  return (
    <Wrapper>
      <Header>Adicionar módulo</Header>
      <form
        onSubmit={handleSubmit(data => onSubmit(data))}
      >
        <DefaultInputField
          name="name"
          floatingLabelText="Nome"
        />
        <DefaultInputField
          name="relay1"
          floatingLabelText="Nome do Relé 1"
        />
        <DefaultInputField
          name="relay2"
          floatingLabelText="Nome do Relé 2"
        />
        <DefaultInputField
          name="location"
          component={SelectField}
          floatingLabelText="Tipo"
        >
          <MenuItem value={'DEFAULT'} primaryText="N/A" />
          <MenuItem value={'ACCESS'} primaryText="Acesso" />
          <MenuItem value={'AQUARIUM'} primaryText="Aquário" />
          <MenuItem value={'KITCHEN'} primaryText="Cozinha" />
          <MenuItem value={'LAUNDRY'} primaryText="Lavanderia" />
          <MenuItem value={'LIVING_ROOM'} primaryText="Sala" />
        </DefaultInputField>
        <DefaultInputField
          name="morpheusId"
          component={SelectField}
          floatingLabelText="Número de série do Morpheus"
        >
          {
            morpheusOptions &&
            objectToArray(morpheusOptions).map(morpheus =>
              (
                <MenuItem
                  value={morpheus._id}
                  key={morpheus._id}
                  primaryText={morpheus.serial}
                />
              ),
            )
          }
        </DefaultInputField>
        <DefaultInputField
          name="serial"
          floatingLabelText="Número de série"
        />
        <ButtonWrapper>
          <RaisedButton
            disabled={moduleAdding}
            label="Adicionar"
            primary
            style={{ margin: '15px 0' }}
            type="submit"
          />
        </ButtonWrapper>
      </form>
      <DefaultDialog
        actions={[{ label: 'Ok', onTouchTap: clearError }]}
        title="Erro adicionando módulo"
        open={moduleError}
        onRequestClose={clearError}
      >
        { moduleError ? decodeError() : '' }
      </DefaultDialog>
    </Wrapper>
  )
}

AddModuleForm.propTypes = {
  addModule: PropTypes.func.isRequired,
  emitConfiguration: PropTypes.func.isRequired,
  moduleAdding: PropTypes.bool.isRequired,
  morpheusOptions: PropTypes.object.isRequired,
  moduleError: PropTypes.array,
  handleSubmit: PropTypes.func.isRequired,
  clearError: PropTypes.func.isRequired,
}

AddModuleForm.defaultProps = {
  moduleError: [],
}

export default (AddModuleForm)
