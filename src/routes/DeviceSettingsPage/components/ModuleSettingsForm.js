import MenuItem from 'material-ui/MenuItem'
import RaisedButton from 'material-ui/RaisedButton'
import React, { PropTypes } from 'react'
import { Field } from 'redux-form'
import { SelectField, TextField } from 'redux-form-material-ui'
import styled from 'styled-components'
import { objectToArray2 as objectToArray } from '@helpers/objectToArray'
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

const ModuleSettingsForm = ({
  module,
  updateModule,
  morpheus,
  moduleUpdating,
  handleSubmit,
}) => (
  <Wrapper>
    <SettingsSection>
      <Header>Configurações</Header>
      <form onSubmit={handleSubmit(values => updateModule({ ...module, ...values }))}>
        <Field
          name="name"
          floatingLabelText="Nome"
          floatingLabelStyle={{ top: '18px' }}
          errorStyle={{ bottom: '8px' }}
          inputStyle={{ marginTop: '2px' }}
          component={TextField}
          style={{ width: '100%', height: '52px' }}
        />
        <Field
          name="relay1"
          floatingLabelText="Nome do Relé 1"
          floatingLabelStyle={{ top: '18px' }}
          errorStyle={{ bottom: '8px' }}
          inputStyle={{ marginTop: '2px' }}
          component={TextField}
          style={{ width: '100%', height: '52px' }}
        />
        <Field
          name="relay2"
          floatingLabelText="Nome do Relé 2"
          floatingLabelStyle={{ top: '18px' }}
          errorStyle={{ bottom: '8px' }}
          inputStyle={{ marginTop: '2px' }}
          component={TextField}
          style={{ width: '100%', height: '52px' }}
        />
        <Field
          name="location"
          component={SelectField}
          floatingLabelText="Tipo"
          floatingLabelStyle={{ top: '18px' }}
          errorStyle={{ bottom: '8px' }}
          inputStyle={{ marginTop: '2px' }}
          style={{ width: '100%', height: '52px' }}
        >
          <MenuItem value={'DEFAULT'} primaryText="N/A" />
          <MenuItem value={'ACCESS'} primaryText="Acesso" />
          <MenuItem value={'AQUARIUM'} primaryText="Aquário" />
          <MenuItem value={'KITCHEN'} primaryText="Cozinha" />
          <MenuItem value={'LAUNDRY'} primaryText="Lavanderia" />
          <MenuItem value={'LIVING_ROOM'} primaryText="Sala" />
        </Field>
        <Field
          name="morpheusId"
          component={SelectField}
          floatingLabelText="Número de série do Morpheus"
          floatingLabelStyle={{ top: '18px' }}
          errorStyle={{ bottom: '8px' }}
          inputStyle={{ marginTop: '2px' }}
          style={{ width: '100%', height: '52px' }}
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
        </Field>
        <ButtonWrapper>
          <RaisedButton
            disabled={moduleUpdating}
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

ModuleSettingsForm.propTypes = {
  updateModule: PropTypes.func.isRequired,
  module: PropTypes.object,
  morpheus: PropTypes.object,
  moduleUpdating: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}

ModuleSettingsForm.defaultProps = {
  module: null,
  morpheus: null,
}

export default ModuleSettingsForm
