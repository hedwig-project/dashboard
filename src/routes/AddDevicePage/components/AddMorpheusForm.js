import React, { PropTypes } from 'react'
import styled from 'styled-components'
import DefaultButton from '@components/DefaultButton'
import DefaultDialog from '@components/DefaultDialog'
import DefaultInputField from '@components/DefaultInputField'
import fonts from '@consts/fonts'
import colors from '@consts/colors'

const Header = styled.h2`
  font-size: ${fonts.large};
  color: ${colors.mainBlue};
  text-align: center;
  margin: 30px 0 0 0;
  font-weight: normal;
`

const AddMorpheusForm = ({
  addMorpheus,
  morpheusAdding,
  morpheusError,
  handleSubmit,
  clearError,
}) => {
  const decodeError = () => ('Erro ao adicionar Morpheus')

  return (
    <div>
      <Header>Adicionar Morpheus</Header>
      <form onSubmit={handleSubmit(addMorpheus)}>
        <div>
          <DefaultInputField
            name="serial"
            floatingLabelText="Número de série"
          />
        </div>
        <DefaultButton
          disabled={morpheusAdding}
          label="Adicionar"
          type="submit"
        />
      </form>
      <DefaultDialog
        actions={[{ label: 'Ok', onTouchTap: clearError }]}
        title="Erro adicionando Morpheus"
        open={morpheusError}
        onRequestClose={clearError}
      >
        { morpheusError ? decodeError() : '' }
      </DefaultDialog>
    </div>)
}

AddMorpheusForm.propTypes = {
  addMorpheus: PropTypes.func.isRequired,
  morpheusAdding: PropTypes.bool.isRequired,
  morpheusError: PropTypes.array,
  handleSubmit: PropTypes.func.isRequired,
  clearError: PropTypes.func.isRequired,
}

export default (AddMorpheusForm)
