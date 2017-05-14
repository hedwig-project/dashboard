import React from 'react'
import PropTypes from 'prop-types'
import { Line } from 'react-chartjs-2';
import { Card, CardHeader, CardText } from '../Card'
import './temperature.scss'

class Temperature extends React.Component {
  propTypes: {
    children: PropTypes.node
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getState() {
    return {
      labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'],
      datasets: [
        {
          label: 'Temperatura',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [
            this.getRandomInt(20, 30),
            this.getRandomInt(20, 35),
            this.getRandomInt(20, 30),
            this.getRandomInt(25, 30),
            this.getRandomInt(20, 25),
            this.getRandomInt(20, 25),
            this.getRandomInt(20, 25)
          ]
        }
      ]
    }
  }

  constructor(props) {
    super(props);
    this.state = this.getState();
  }

  componentWillMount() {
		setInterval(() => {
			this.setState(this.getState());
		}, 5000);
	}

  render() {
    return (
      <Card>
        <CardHeader>Temperatura</CardHeader>
        <CardText>
          <div className='temperature-graph'>
            <Line
              data={this.state} />
          </div>
        </CardText>
      </Card>
    );
  }
}

export default Temperature
