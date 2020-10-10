const mockSuccessResponse = { pages: 100, results: [{ name: 'Hello', type: 'movie' }] };
const mockJsonPromise = Promise.resolve(mockSuccessResponse);
const mockFetchPromise = Promise.resolve({
  json: () => mockJsonPromise,
});

export default mockFetchPromise;
