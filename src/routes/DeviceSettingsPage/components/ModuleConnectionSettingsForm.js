import MenuItem from 'material-ui/MenuItem'
import RaisedButton from 'material-ui/RaisedButton'
import React, { PropTypes } from 'react'
import { Field } from 'redux-form'
import { SelectField, TextField } from 'redux-form-material-ui'
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

const ModuleConnectionSettingsForm = ({
  module,
  updateModule,
  moduleUpdating,
  handleSubmit,
}) => (
  <Wrapper>
    <SettingsSection>
      <Header>Configurações de conectividade</Header>
      <form onSubmit={handleSubmit(values => updateModule({ ...module, ...values }))}>
        <Field
          name="home_ssid"
          floatingLabelText="SSID da rede da casa"
          floatingLabelStyle={{ top: '18px' }}
          errorStyle={{ bottom: '8px' }}
          inputStyle={{ marginTop: '2px' }}
          component={TextField}
          style={{ width: '100%', height: '52px' }}
        />
        <Field
          name="home_password"
          floatingLabelText="Senha da rede da casa"
          floatingLabelStyle={{ top: '18px' }}
          errorStyle={{ bottom: '8px' }}
          inputStyle={{ marginTop: '2px' }}
          component={TextField}
          style={{ width: '100%', height: '52px' }}
          type="password"
        />
        <Field
          name="module_ip"
          floatingLabelText="IP do módulo"
          floatingLabelStyle={{ top: '18px' }}
          errorStyle={{ bottom: '8px' }}
          inputStyle={{ marginTop: '2px' }}
          component={TextField}
          style={{ width: '100%', height: '52px' }}
          disabled
        />
        <Field
          name="module_ap_mode"
          component={SelectField}
          floatingLabelText="Modo do ponto de acesso do módulo"
          floatingLabelStyle={{ top: '18px' }}
          errorStyle={{ bottom: '8px' }}
          inputStyle={{ marginTop: '2px' }}
          style={{ width: '100%', height: '52px' }}
        >
          <MenuItem value={'auto'} primaryText="Automático" />
          <MenuItem value={'always_active'} primaryText="Sempre ativo" />
        </Field>
        <Field
          name="module_ap_name"
          floatingLabelText="Nome do ponto de acesso do módulo"
          floatingLabelStyle={{ top: '18px' }}
          errorStyle={{ bottom: '8px' }}
          inputStyle={{ marginTop: '2px' }}
          component={TextField}
          style={{ width: '100%', height: '52px' }}
        />
        <Field
          name="module_ap_password"
          floatingLabelText="Senha do ponto de acesso do módulo"
          floatingLabelStyle={{ top: '18px' }}
          errorStyle={{ bottom: '8px' }}
          inputStyle={{ marginTop: '2px' }}
          component={TextField}
          style={{ width: '100%', height: '52px' }}
          type="password"
        />
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

ModuleConnectionSettingsForm.propTypes = {
  updateModule: PropTypes.func.isRequired,
  module: PropTypes.object,
  moduleUpdating: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}

ModuleConnectionSettingsForm.defaultProps = {
  module: null,
}

export default ModuleConnectionSettingsForm
