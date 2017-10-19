import RaisedButton from 'material-ui/RaisedButton'
import React, { PropTypes } from 'react'
import styled from 'styled-components'
import DefaultDialog from '@components/DefaultDialog'
import DefaultInputField from '@components/DefaultInputField'
import fonts from '@consts/fonts'
import colors from '@consts/colors'

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

const AddMorpheusForm = ({
  addMorpheus,
  morpheusAdding,
  morpheusError,
  handleSubmit,
  clearError,
}) => {
  const decodeError = () => ('Erro ao adicionar Morpheus')

  return (
    <Wrapper>
      <Header>Adicionar Morpheus</Header>
      <form onSubmit={handleSubmit(addMorpheus)}>
        <DefaultInputField
          name="serial"
          floatingLabelText="Número de série"
        />
        <ButtonWrapper>
          <RaisedButton
            disabled={morpheusAdding}
            label="Adicionar"
            primary
            style={{ margin: '15px 0' }}
            type="submit"
          />
        </ButtonWrapper>
      </form>
      <DefaultDialog
        actions={[{ label: 'Ok', onTouchTap: clearError }]}
        title="Erro adicionando Morpheus"
        open={morpheusError}
        onRequestClose={clearError}
      >
        { morpheusError ? decodeError() : '' }
      </DefaultDialog>
    </Wrapper>)
}

AddMorpheusForm.propTypes = {
  addMorpheus: PropTypes.func.isRequired,
  morpheusAdding: PropTypes.bool.isRequired,
  morpheusError: PropTypes.array,
  handleSubmit: PropTypes.func.isRequired,
  clearError: PropTypes.func.isRequired,
}

AddMorpheusForm.defaultProps = {
  morpheusError: [],
}

export default (AddMorpheusForm)
