import * as API from './API.js'
import * as APIKey from '../apiKeys'

export const fetchGolfCoursesByZip = async (zipCode) => {
	const url = `https://www.dgcoursereview.com/api_test/?key=${APIKey.discGolfKey}&mode=findzip&zip=${zipCode}&rad=10&sig=${APIKey.discGolfSig}`
	const golfCourseData = await API.fetchData(url)
	const golfCourseResults = await returnGolfCourseData(golfCourseData, zipCode)
	return golfCourseResults
}

export const returnGolfCourseData = async (golfCourses, zipCode) => {
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
			isPayToPlay: convertNumToBool(course.paytoplay),
			weather: await fetchCurrentWeatherByZip(zipCode),
		}
	})
	return Promise.all(golfCoursePromises)
}

export const fetchCurrentWeatherByZip = async (zipCode) => {
	const url = `api.openweathermap.org/data/2.5/weather?zip=${zipCode}&units=imperial&APPID=${APIKey.weatherKey}`
	const currentWeatherData = await API.fetchData(url)
	const currentWeatherResults = await returnCurrentWeatherData(currentWeatherData)
	console.log(currentWeatherResults)
	return currentWeatherResults
}

export const returnCurrentWeatherData = async (currentWeather) => {
	const { id, main, weather, wind } = currentWeather
	const currentWeatherPromise = 
		{
			id: id,
			temp: main.temp,
			description: capitalizeString(weather[0].description),
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


const capitalizeString = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export const fetchWeather = async () => {

}

export const returnWeatherData = async () => {

}