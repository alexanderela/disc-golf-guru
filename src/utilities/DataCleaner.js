import * as API from './API.js'
import * as APIKey from '../apiKeys'

export const fetchGolfCoursesByZip = async (enteredZipCode) => {
	const url = `https://www.dgcoursereview.com/api_test/?key=${APIKey.discGolfKey}&mode=findzip&zip=${enteredZipCode}&rad=10&sig=${APIKey.discGolfSig}`
	const golfCourseData = await API.fetchData(url)
	const golfCourseResults = await returnGolfCourseData(golfCourseData)
	// console.log(golfCourseResults)
	return golfCourseResults
}

export const returnGolfCourseData = async (golfCourses) => {
	const golfCoursePromises = golfCourses.map( async course => {
		return {
			id: course.course_id,
			name: course.name,
			holes: course.holes,
			city: course.city,
			state: course.state,
			country: course.country,
			zipCode: course.zipcode,
			street_addr: course.street_addr,
			reviews: course.reviews,
			rating: course.rating,
			payToPlay: course.paytoplay,
			// reviewsLink: course.dgcr_url,
		}
	})
	return Promise.all(golfCoursePromises)
}


export const fetchWeather = async () => {

}

export const returnWeatherData = async () => {

}



