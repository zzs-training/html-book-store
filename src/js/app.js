import '../scss/app.scss';

const BookService = require('./services/book.service');

/* Your JS Code goes here */

// function ratingFirst() {
//   for (let i = 1; i < 6; i += 1) {
//     document.getElementById(`vote-${i}`).classList.add('colorclick');
//   }
// }
// ratingFirst();

// function voteRatingClick() {
//   var index = String(this.id).slice(String(this.id).indexOf('-') + 1);
//   var ratingScore = Number(index) / 2;
//   document.getElementById('showRating').innerHTML = ratingScore;
//   for (let i = 1; i < 11; i += 1) {
//     if (i <= index) {
//       document.getElementById(`vote-${i}`).classList.add('colorclick');
//       document.getElementById(`vote-${i}`).classList.remove('colorbasic');
//     } else {
//       document.getElementById(`vote-${i}`).classList.remove('colorclick');
//     }
//   }
// }

// function addEventToElement() {
//   for (let i = 1; i < 11; i += 1) {
//     document.getElementById(`vote-${i}`).addEventListener('click', voteRatingClick);
//   }
// }

// addEventToElement();

// This is example for using service
window.onload = () => {
  BookService.fetch()
    .then((response) => console.log(response.data));
};

function addEventLoad() {
  document.getElementById('pageBooks').addEventListener('load', load());
}
addEventLoad();

function load() {
  BookService.fetch()
    .then((response) => {
      const books = response.data;
      console.log(books);
      showHtmlContent(books, 'showContentBook');
    });
}

function showHtmlContent(arrayBooks, locationShowContent) {
  let html = '';
  arrayBooks.forEach((element) => {
    html += `
      <div class="card-store">
        <img class="card-store__img" src="./assets/images/Bookstore3.png" alt="">
        <div class="card-store__content">
          <div class="card-store__content__head">
              <p class="title"> ${element.attributes.name}</p>
              <p class="price">$23.89</p>
          </div>

          <p class="intro">${element.attributes.short_desc}</p>
          <p class="details">Printed Books</p>
        </div>

        <div class="card-store__footer">
            <div class="btnbasic btn-yellow-border btn-small-l">Order Today</div>
        </div>
      </div>

    `;
  });
  console.log(html);
  document.getElementById(locationShowContent).innerHTML = html;
}
