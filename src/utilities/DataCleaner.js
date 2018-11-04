import * as API from './API.js'
import * as APIKey from '../apiKeys'

export const fetchGolfCoursesByZip = async (enteredZipCode) => {
	const url = `https://www.dgcoursereview.com/api_test/?key=${APIKey.discGolfKey}&mode=findzip&zip=${enteredZipCode}&rad=10&sig=${APIKey.discGolfSig}`
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
			isFree: convertNumToBool(course.paytoplay),
			reviews: course.reviews,
		}
	})
	return Promise.all(golfCoursePromises)
}

const convertNumToBool = (number) => {
	if (number === '0') {
		return 'No'
	} else {
		return 'Yes'
	}
};

export const fetchWeather = async () => {

}

export const returnWeatherData = async () => {

}



