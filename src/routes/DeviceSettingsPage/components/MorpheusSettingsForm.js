import Checkbox from 'material-ui/Checkbox'
import Divider from 'material-ui/Divider'
import RaisedButton from 'material-ui/RaisedButton'
import React, { PropTypes } from 'react'
import { Field } from 'redux-form'
import styled from 'styled-components'
import DefaultDialog from '@components/DefaultDialog'
import fonts from '@consts/fonts'

const Wrapper = styled.div`
  margin-top: 20px;
`

const SettingsSection = styled.section`
  padding: 20px 0;
`

const Header = styled.h3`
  font-size: ${fonts.medium};
  text-align: center;
  font-weight: normal;
  margin-bottom: 10px;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const MorpheusSettingsForm = ({
  morpheus,
  deleteMorpheus,
  updateMorpheus,
  morpheusError,
  morpheusRemoving,
  morpheusUpdating,
  handleSubmit,
  clearError,
}) => {
  const decodeError = () => ('Erro ao adicionar Morpheus')

  // eslint-disable-next-line react/prop-types
  const renderCheckbox = ({ input, label }) => (
    <Checkbox
      label={label}
      checked={input.value === '' ? false : input.value}
      onCheck={input.onChange}
    />
  )

  return (
    <Wrapper>
      <SettingsSection>
        <Header>Configurações</Header>
        <form
          onSubmit={
            handleSubmit(values => updateMorpheus({ ...morpheus, resend: values.resend === true }))
          }
        >
          <Field
            id="resend"
            name="resend"
            component={renderCheckbox}
            label="Reenviar mensagens pendentes"
          />
          <ButtonWrapper>
            <RaisedButton
              disabled={morpheusUpdating}
              label="Atualizar"
              primary
              style={{ margin: '15px 0' }}
              type="submit"
            />
          </ButtonWrapper>
        </form>
      </SettingsSection>
      <Divider />
      <SettingsSection>
        <Header>Remover Morpheus</Header>
        Tem certeza que deseja remover o Morpheus?
        Todos os módulos associados serão removidos também.
        <ButtonWrapper>
          <RaisedButton
            disabled={morpheusRemoving}
            onClick={() => deleteMorpheus(morpheus)}
            label="Remover"
            secondary
            style={{ margin: '15px 0' }}
          />
        </ButtonWrapper>
      </SettingsSection>
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

MorpheusSettingsForm.propTypes = {
  deleteMorpheus: PropTypes.func.isRequired,
  updateMorpheus: PropTypes.func.isRequired,
  morpheus: PropTypes.object,
  morpheusError: PropTypes.array,
  morpheusRemoving: PropTypes.bool.isRequired,
  morpheusUpdating: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  clearError: PropTypes.func.isRequired,
}

MorpheusSettingsForm.defaultProps = {
  morpheus: null,
  morpheusError: [],
}

export default (MorpheusSettingsForm)
