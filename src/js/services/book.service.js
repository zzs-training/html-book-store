const ApiService = require('./api.service');

module.exports = {
  fetch() {
    return new Promise((resolve, reject) => {
      ApiService.get('/books')
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};
