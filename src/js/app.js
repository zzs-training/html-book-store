import '../scss/app.scss';

const AuthorService = require('./services/author.service');

/* Your JS Code goes here */

function ratingFirst() {
  for (let i = 1; i < 6; i += 1) {
    document.getElementById(`vote-${i}`).classList.add('colorclick');
  }
}

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

// This is example for using service
// window.onload = () => {
//   BookService.fetch()
//     .then((response) => console.log(response.data));
//   ratingFirst();
//   addEventToElement();
// };

function addEventLoad() {
  document.getElementById('pageAuthor').addEventListener('load', load());
}
addEventLoad();

function load() {
  AuthorService.fetch()
    .then((response) => {
      const authors = response.data;
      console.log(authors);
      showHtmlContent(authors, 'showContent');
      ratingFirst();
      addEventToElement();
    });
}

function showHtmlContent(arrayAuthors, locationShowContent) {
  let html = '';
  arrayAuthors.forEach((element) => {
    html += `
    <div class="about">
    <div class="author">
        <img class="author__img" src="./assets/images/author.png" alt="">
        <div class="author__content">
            <div class="details">
                <div class="details-content">
                    <table>
                        <tr>
                            <td><span>Country :</span></td>
                            <td> ${element.attributes.country}</td>
                        </tr>
                        <tr>
                            <td><span> Language :</span></td>
                            <td> ${element.attributes.language}</td>
                        </tr>
                        <tr>
                            <td><span>Genre :</span></td>
                            <td> ${element.attributes.genre}</td>
                        </tr>
                        <tr>
                            <td><span>Publication date :</span></td>
                            <td> 1991</td>
                        </tr>
                        <tr>
                            <td><span>Share us on:</span></td>
                            <td> (+22) 123 - 456</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="title">
                <div class="title-content">
                    <p class="name"> ${element.attributes.first_name} ${element.attributes.last_name} </p>
                    <hr style="width: 55px; border: 3px solid #FFCA42; background-color: #FFCA42;">
                    <p class="intro">All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks
                        as
                        necessary, making this the first true generator on the Internet. It uses a dictionary of
                        over 200 Latin words, that can combined with a handful of model sentence structures.</p>
                </div>
                <button>Contact now</button>
            </div>
        </div>
    </div>
</div>
    `;
  });
  console.log(html);
  document.getElementById(locationShowContent).innerHTML = html;
}
