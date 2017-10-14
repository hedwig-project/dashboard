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
  // authFetching,
  // authError,
  handleSubmit,
  // clearError,
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
          // disabled={authFetching}
          label="Adicionar"
          type="submit"
        />
      </form>
      {/* <DefaultDialog
      //   actions={[{ label: 'Ok', onTouchTap: clearError }]}
      //   title="Login inválido"
      //   open={authError}
      //   onRequestClose={clearError}
      // >
      //   { authError ? decodeError() : '' }
      // </DefaultDialog>*/}
    </div>)
}

AddMorpheusForm.propTypes = {
  // login: PropTypes.func.isRequired,
  // authFetching: PropTypes.bool.isRequired,
  // authError: PropTypes.array,
  // handleSubmit: PropTypes.func.isRequired,
  // clearError: PropTypes.func.isRequired,
}

export default (AddMorpheusForm)
