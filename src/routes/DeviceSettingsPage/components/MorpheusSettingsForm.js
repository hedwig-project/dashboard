import Checkbox from 'material-ui/Checkbox'
import RaisedButton from 'material-ui/RaisedButton'
import React, { PropTypes } from 'react'
import { Field } from 'redux-form'
import styled from 'styled-components'
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
  updateMorpheus,
  morpheusUpdating,
  handleSubmit,
}) => {
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
        <Header>Configurações gerais</Header>
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
    </Wrapper>
  )
}

MorpheusSettingsForm.propTypes = {
  updateMorpheus: PropTypes.func.isRequired,
  morpheus: PropTypes.object,
  morpheusUpdating: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}

MorpheusSettingsForm.defaultProps = {
  morpheus: null,
}

export default (MorpheusSettingsForm)
