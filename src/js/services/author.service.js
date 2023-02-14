const ApiService = require('./api.service');

module.exports = {
  fetch() {
    return new Promise((resolve, reject) => {
      ApiService.get('/authors')
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};
