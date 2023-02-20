const ApiService = require('./api.service');

module.exports = {
  fetch(value, params) {
    return new Promise((resolve, reject) => {
      ApiService.get(`/${value}`, { params })
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};
