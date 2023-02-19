const ApiService = require('./api.service');

module.exports = {
  fetch() {
    return new Promise((resolve, reject) => {
      ApiService.get('/books')
        .then((response) => {
          // console.log(response.data);
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};
