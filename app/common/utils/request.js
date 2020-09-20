export const getDatasets = async (url) => {
  try {
    return await new Promise(resolve => {
      fetch(url).then(res => res.json())
        .then(json => {
          resolve(json.results)
        });
    })
  } catch (error) {
    console.log('Unable to fetch data', JSON.stringify(error))
    throw new Error(error)
  }
}
