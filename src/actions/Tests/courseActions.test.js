import { setCourses, toggleFavorite } from '../courseActions';

describe('courseActions', () => {
	describe('setCourses', () => {
		it('should have a type of SET_COURSES', () => {
			const courses = [{name: 'holeNone'}, {name: 'holeNtwo'}]
			const expected = {
				type: 'SET_COURSES',
				courses
			}
			const result = setCourses(courses)
			expect(result).toEqual(expected)
		});
	});

	describe('toggleFavorites', () => {
		it('should have a type of TOGGLE_FAVORITE', () => {
			const id = 1234
			const expected = {
				type: 'TOGGLE_FAVORITE',
				courseId: 1234
			}
			const result = toggleFavorite(id)
			expect(result).toEqual(expected);
		})
	})
})

