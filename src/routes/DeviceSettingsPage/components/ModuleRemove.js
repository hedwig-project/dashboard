import RaisedButton from 'material-ui/RaisedButton'
import React, { PropTypes } from 'react'
import styled from 'styled-components'
import fonts from '@consts/fonts'

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
  deleteModule,
  moduleRemoving,
}) => (
  <SettingsSection>
    <Header>Remover módulo</Header>
    Tem certeza que deseja remover o módulo?
    <ButtonWrapper>
      <RaisedButton
        disabled={moduleRemoving}
        onClick={() => deleteModule(module)}
        label="Remover"
        secondary
        style={{ margin: '15px 0' }}
      />
    </ButtonWrapper>
  </SettingsSection>
)

ModuleSettingsForm.propTypes = {
  deleteModule: PropTypes.func.isRequired,
  module: PropTypes.object,
  moduleRemoving: PropTypes.bool.isRequired,
}

ModuleSettingsForm.defaultProps = {
  module: null,
}

export default ModuleSettingsForm
