import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardHeader, CardText } from '../Card'
import './security.scss'

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div className='clock'>
        <h2>{ this.state.date.toLocaleTimeString() }</h2>
      </div>
    );
  }
}

const Security = () => {
  return (
    <Card>
      <CardHeader>Segurança</CardHeader>
      <CardText>
        <Clock />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </CardText>
    </Card>
  );
}

export default Security
