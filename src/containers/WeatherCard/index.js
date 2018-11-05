import React, { Component } from 'react';
import './WeatherCard.css';
import Icons from '../../utilities/Icons-data';

class WeatherCard extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	render() {
		const { id, temp, description, wind, humidity, icon } = this.props.currentWeather
		console.log(this.props)
		return(
			<div className='WeatherCard'>
				<h2 className='weather-card-header'>Current Weather</h2>	
				<img
              src={Icons[icon]} 
              alt="Icon representing current weather conditions"
              className="current-weather-icon"
            />		
        <p className='weather-info'>
					<span className='weather-info-header'>
						Temperature:
					</span> {temp}
				</p>
        <p className='weather-info'>
					<span className='weather-info-header'>
						Summary:
					</span> {description}
				</p>
        <p className='weather-info'>
					<span className='weather-info-header'>
						Wind:
					</span> {wind} mph
				</p>
        <p className='weather-info'>
					<span className='weather-info-header'>
						Humidity:
					</span> {humidity}%
				</p>
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