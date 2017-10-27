import MenuItem from 'material-ui/MenuItem'
import RaisedButton from 'material-ui/RaisedButton'
import React, { PropTypes } from 'react'
import { SelectField } from 'redux-form-material-ui'
import styled from 'styled-components'
import DefaultDialog from '@components/DefaultDialog'
import DefaultInputField from '@components/DefaultInputField'
import { objectToArray2 as objectToArray } from '@helpers/objectToArray'
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

const MorpheusSettingsForm = ({
  deleteMorpheus,
  morpheus,
  morpheusError,
  morpheusRemoving,
  handleSubmit,
  clearError,
}) => {
  const decodeError = () => ('Erro ao adicionar Morpheus')

  return (
    <Wrapper>
      <Header>Gerenciar Morpheus</Header>
      <form onSubmit={handleSubmit(deleteMorpheus)}>
        <DefaultInputField
          name="morpheusId"
          component={SelectField}
          floatingLabelText="Número de série do Morpheus"
        >
          {
            morpheus &&
            objectToArray(morpheus).map(item =>
              (
                <MenuItem
                  value={item._id}
                  key={item._id}
                  primaryText={item.serial}
                />
              ),
            )
          }
        </DefaultInputField>
        <ButtonWrapper>
          <RaisedButton
            disabled={morpheusRemoving}
            label="Remover"
            primary
            style={{ margin: '15px 0' }}
            type="submit"
          />
        </ButtonWrapper>
      </form>
      <DefaultDialog
        actions={[{ label: 'Ok', onTouchTap: clearError }]}
        title="Erro removendo Morpheus"
        open={morpheusError}
        onRequestClose={clearError}
      >
        { morpheusError ? decodeError() : '' }
      </DefaultDialog>
    </Wrapper>)
}

MorpheusSettingsForm.propTypes = {
  deleteMorpheus: PropTypes.func.isRequired,
  morpheus: PropTypes.object,
  morpheusError: PropTypes.array,
  morpheusRemoving: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  clearError: PropTypes.func.isRequired,
}

MorpheusSettingsForm.defaultProps = {
  morpheus: null,
  morpheusError: [],
}

export default (MorpheusSettingsForm)
