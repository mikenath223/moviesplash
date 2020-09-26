export const getDatasets = async (url) => {
  let result;
  try {
    result = await new Promise(resolve => {
      fetch(url).then(res => res.json())
        .then(json => {
          resolve(json)
        });
    })
  } catch (error) {
    console.log('Unable to fetch data',
      JSON.stringify(error));
      result = {status_message: 'Sorry we are unable to retrieve data from resource'}
      throw new Error(error);
  } finally {
    return result
  }
}
