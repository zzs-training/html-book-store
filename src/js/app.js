import '../scss/app.scss';

const BookService = require('./services/book.service');

/* Your JS Code goes here */

function ratingFirst() {
  for (let i = 1; i < 6; i += 1) {
    document.getElementById(`vote-${i}`).classList.add('colorclick');
  }
}
ratingFirst();

function voteRatingClick() {
  var index = String(this.id).slice(String(this.id).indexOf('-') + 1);
  var ratingScore = Number(index) / 2;
  document.getElementById('showRating').innerHTML = ratingScore;
  for (let i = 1; i < 11; i += 1) {
    if (i <= index) {
      document.getElementById(`vote-${i}`).classList.add('colorclick');
      document.getElementById(`vote-${i}`).classList.remove('colorbasic');
    } else {
      document.getElementById(`vote-${i}`).classList.remove('colorclick');
    }
  }
}

function addEventToElement() {
  for (let i = 1; i < 11; i += 1) {
    document.getElementById(`vote-${i}`).addEventListener('click', voteRatingClick);
  }
}

addEventToElement();

// This is example for using service
window.onload = () => {
  BookService.fetch()
    .then((response) => console.log(response.data));
};
