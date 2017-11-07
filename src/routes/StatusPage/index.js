import { Card } from 'material-ui/Card'
import FontIcon from 'material-ui/FontIcon'
import { List, ListItem } from 'material-ui/List'
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: ${props => (props.lessThanMedium ? '100%' : '50%')};
  padding: 50px 20px;
  margin: 0 auto;
`

const Title = styled.h1`
  font-size: 28px;
  margin: 20px 0;
  text-align: center;
`

const Text = styled.div`
  width: 100%;
  font-size: 16px;
  padding: 20px 0;
  text-align: center;
`

const getIconClassName = (serial, connected) => Object.keys(connected).includes(serial) ? 'fa fa-check' : 'fa fa-times'

const getIconColor = (serial, connected) => Object.keys(connected).includes(serial) ? '#4CAF50' : '#F44336'

const renderList = (morpheus, morpheusConnected) => {
  if (Object.keys(morpheus).length === 0) {
    return (<Text>Ooops! Parece que ainda não existem Morpheus na sua conta.</Text>)
  }

  return Object.keys(morpheus).map(item => (
    <ListItem
      key={item}
      primaryText={item}
      leftIcon={
        <FontIcon
          className={getIconClassName(item, morpheusConnected)}
          color={getIconColor(item, morpheusConnected)}
        />
      }
      disabled
    />
  ))
}

const StatusPage = props => (
  <Wrapper lessThanMedium={props.lessThanMedium}>
    <Card>
      <Title>Status dos Morpheus</Title>
      <List>
        {
          renderList(props.morpheus, props.morpheusConnected)
        }
      </List>
    </Card>
  </Wrapper>
)

StatusPage.propTypes = {
  lessThanMedium: PropTypes.bool.isRequired,
  morpheus: PropTypes.object.isRequired,
  morpheusConnected: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  lessThanMedium: state.browser.lessThan.medium,
  morpheus: state.morpheus.get('morpheus').toJS(),
  morpheusConnected: state.morpheus.get('connected').toJS(),
})

export default connect(mapStateToProps)(StatusPage)
