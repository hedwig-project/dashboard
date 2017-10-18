import moment from 'moment'
import React, {
  Component,
  PropTypes,
} from 'react'
import styled from 'styled-components'

const Container = styled.article`
  width: 100%;
  font-size: 14px;
  padding: 20px;
  text-align: center;
`

class LastUpdatedAt extends Component {
  render() {
    const {
      timestamp,
    } = this.props

    const renderMoment = ts => moment.unix(ts).format('DD/MM/YYYY HH:mm:ss')

    return (
      <Container>
        Última atualização: {timestamp ? renderMoment(timestamp) : 'N/A'}
      </Container>
    );
  }
}

LastUpdatedAt.propTypes = {
  timestamp: PropTypes.number,
}

LastUpdatedAt.defaultProps = {
  timestamp: null,
}

export default LastUpdatedAt
