const getDatasets = async url => {
  try {
    return fetch(url).then(res => res.json())
      .then(json => json);
  } catch (error) {
    return {
      status_message: 'Sorry we are unable to retrieve data from resource',
    };
  }
};

export default getDatasets;
