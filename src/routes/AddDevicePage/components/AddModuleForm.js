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

const AddModuleForm = ({
  addModule,
  // authFetching,
  // authError,
  handleSubmit,
  // clearError,
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
            floatingLabelText="Tipo" // TODO shouldnt be an open field
          />
        </div>
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

AddModuleForm.propTypes = {
  // login: PropTypes.func.isRequired,
  // authFetching: PropTypes.bool.isRequired,
  // authError: PropTypes.array,
  // handleSubmit: PropTypes.func.isRequired,
  // clearError: PropTypes.func.isRequired,
}

export default (AddModuleForm)
