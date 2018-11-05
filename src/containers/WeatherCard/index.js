import React, { Component } from 'react';
import './WeatherCard.css';

class WeatherCard extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	render() {
		const { id, temp, description, wind, humidity } = this.props.currentWeather
		console.log(this.props)
		return(
			<div className='WeatherCard'>
					<p>{temp}</p>
					<p>{description}</p>
					<p>{wind}</p>
					<p>{humidity}</p>
			</div>
		)
	}
}

export default WeatherCard


// const mockCurrentWeather =  {
//     id: 420026615,
//     temp: 43.77,
//     description: 'broken clouds',
//     wind: 8.05,
//     humidity: 76
// }