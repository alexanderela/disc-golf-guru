import { toggleCourseDetails } from '../courseDetailsActions';

describe('courseDetailsActions', () => {
  describe('toggleCourseDetails', () => {
    it('should have a type of TOGGLE_COURSE_DETAILS', () => {
      const expected = {
        type: 'TOGGLE_COURSE_DETAILS',
      };
      const result = toggleCourseDetails();
      expect(expected).toEqual(result);
    });
  });
});
