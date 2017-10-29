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

const MorpheusRemove = ({
  morpheus,
  deleteMorpheus,
  morpheusRemoving,
}) => (
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
)

MorpheusRemove.propTypes = {
  deleteMorpheus: PropTypes.func.isRequired,
  morpheus: PropTypes.object,
  morpheusRemoving: PropTypes.bool.isRequired,
}

MorpheusRemove.defaultProps = {
  morpheus: null,
}

export default MorpheusRemove
