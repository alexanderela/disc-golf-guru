import * as API from '../API';

describe('API', () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve({ data: 'mockData' }),
      })
    );
  });

  it('should call fetch with the correct parameters', () => {
    const url = 'www.soundcloud.com';
    API.fetchData(url);
    expect(window.fetch).toHaveBeenCalledWith(url);
  });

  it('should return json response from fetch', async () => {
    const url = 'www.soundcloud.com';
    const expected = { data: 'mockData' };
    const response = await API.fetchData(url);
    expect(response).toEqual(expected);
  });
});
