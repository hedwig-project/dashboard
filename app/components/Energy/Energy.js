import React from 'react'
import PropTypes from 'prop-types'
import { Doughnut } from 'react-chartjs-2';
import { Card, CardHeader, CardText } from '../Card'
import './energy.scss'

class Energy extends React.Component {
  propTypes: {
    children: PropTypes.node
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getState() {
    return {
      labels: [
        'Quarto',
        'Sala',
        'Cozinha'
      ],
      datasets: [{
        data: [
          this.getRandomInt(50, 200),
          this.getRandomInt(100, 150),
          this.getRandomInt(150, 250)
        ],
        backgroundColor: [
          '#CCC',
          '#36A2EB',
          '#FFCE56'
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56'
        ]
      }]
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
        <CardHeader>Energia</CardHeader>
        <CardText>
          <div className='energy-graph'>
            <Doughnut
              data={this.state} />
          </div>
        </CardText>
      </Card>
    );
  }
}

export default Energy
