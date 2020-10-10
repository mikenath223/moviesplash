import trendingUrl from 'ms/common/constants';
import getDataSets from './request';
import mockFetchPromise, { mockUrl } from './mock-fetch';

global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);
jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);

describe('request', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  afterAll(() => {
    global.fetch.mockClear();
    delete global.fetch;
  });

  it('getDataSets returns success response', async () => {
    const res = await getDataSets(trendingUrl);

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(res).toBeDefined();
  });

  it('getDataSets throw exception', async () => {
    fetch.mockImplementationOnce(() => Promise.reject(new Error('API is down')));

    await expect(getDataSets(mockUrl)).rejects.toThrow();
  });
});
