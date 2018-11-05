import * as API from './API.js'
import * as APIKey from '../apiKeys'


export const fetchGolfCoursesByZip = async (input) => {
	let url;
	const checkedInput = isValidZip(input);
	if (checkedInput) {
		url = `https://www.dgcoursereview.com/api_test/?key=${APIKey.discGolfKey}&mode=findzip&zip=${input}&rad=10&sig=${APIKey.discGolfSig}`
	} else {
		url = `https://www.dgcoursereview.com/api_test/?key=${APIKey.discGolfKey}&mode=findloc&city=${input}&rad=10&state=NY&country=US&sig=${APIKey.discGolfSig}`
	}
	
	const golfCourseData = await API.fetchData(url)
	const golfCourseResults = await returnGolfCourseData(golfCourseData)
	return golfCourseResults
}

export const returnGolfCourseData = async (golfCourses) => {
	const golfCoursePromises = golfCourses.map( async course => {
		return {
			id: course.course_id,
			isFavorite: false,
			name: course.name,
			address: course.street_addr,
			city: course.city,
			state: course.state,
			zip: course.zipcode,
			country: course.country,
			holes: course.holes,
			rating: course.rating,
			isPrivate: convertNumToBool(course.private),
			isPayToPlay: convertNumToBool(course.paytoplay)
		}
	})
	return Promise.all(golfCoursePromises)
}

export const fetchCurrentWeather = async (input) => {
	let url;
	const checkedInput = isValidZip(input);
	if (checkedInput) {
		url = `https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?zip=${input}&units=imperial&APPID=${APIKey.weatherKey}`
		// `http://www.api.openweathermap.org/data/2.5/weather?zip=${input}&units=imperial&APPID=a1b5ca4a4ec033f354008b4971f71994`
		
	} else {
		url = `https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?q=${input}&units=imperial&APPID=${APIKey.weatherKey}`
	}
	const currentWeatherData = await API.fetchData(url)
	const currentWeatherResults = await returnCurrentWeatherData(currentWeatherData)
	return currentWeatherResults
}

export const returnCurrentWeatherData = async (currentWeather) => {
	const { id, main, weather, wind } = currentWeather
	const currentWeatherPromise = 
		{
			id: id,
			temp: main.temp,
			description: capitalizeString(weather[0].description),
			icon: weather[0].icon,
			wind: wind.speed,
			humidity: main.humidity
		}
	return Promise.resolve(currentWeatherPromise)
}

const convertNumToBool = (number) => {
	if (number === '0') {
		return 'No'
	} else {
		return 'Yes'
	}
};

const isValidZip = (input) => {
   return /^\d{5}(-\d{4})?$/.test(input);
}

const capitalizeString = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}