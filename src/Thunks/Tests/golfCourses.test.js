import { setCourses } from '../../actions/courseActions';
import * as DataCleaner from '../../utilities/DataCleaner';
import { fetchGolfCourses } from '../golfCourses.js';
import { hasErrored } from '../../actions/hasErroredAction';

describe('fetchGolfCourses', () => {
  let mockDispatch;

  beforeEach(() => {
    mockDispatch = jest.fn();
  });

  it('should call fetchGolfCourses with correct parameters', () => {
    DataCleaner.fetchGolfCourseData = jest.fn();
    const thunk = fetchGolfCourses(14526);
    thunk(mockDispatch);
    expect(DataCleaner.fetchGolfCourseData).toHaveBeenCalledWith(14526);
  });

  it('should call dispatch with setCourses', async () => {
    DataCleaner.fetchGolfCourseData = jest.fn(() =>
      Promise.resolve({
        name: 'Rochester',
      })
    );
    const mockAction = setCourses({ name: 'Rochester' });

    const thunk = await fetchGolfCourses(14526);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(mockAction);
  });

  it('should show error if thunk has failed', async () => {
    DataCleaner.fetchGolfCourseData = jest.fn().mockImplementation(() =>
      Promise.reject({
        status: 404,
        json: () =>
          Promise.reject({
            error: { message: '404' },
          }),
      })
    );

    const thunk = await fetchGolfCourses(14526);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(hasErrored(true));
  });
});
