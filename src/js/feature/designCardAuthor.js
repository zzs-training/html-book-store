import { checkDataResponse } from './checkDataRespone';

function showHtmlContent(arrayAuthors, locationShowContent) {
  let html = '';
  arrayAuthors.forEach((element) => {
    html += `
    <div class="about">
            <div class="author">
                <div class="author-banner">
                    <div class="author-banner-title">
                        <h4>AUTHOR</h4>
                        <p>  ${checkDataResponse(`${element.attributes.first_name} ${element.attributes.last_name}`)} </p>
                    </div>
                    <div class="author-banner-img">
                        <img class="author__img" src="https://bookstore.ziczac.solutions${element.attributes.avatar.data.attributes.url}" alt="">
                    </div>
                </div>
                
                <div class="author__content">
                    <div class="details">
                        <div class="details-content">
                            <table>
                                <tr>
                                    <td> <p>Country</p><span class = "dots">:</span> </td>
                                    <td>${checkDataResponse(`${element.attributes.country}`)}</td>
                                </tr>
                                <tr>
                                    <td> <p>Language</p><span class = "dots">:</span></td>
                                    <td> ${checkDataResponse(`${element.attributes.language}`)}</td>
                                </tr>
                                <tr>
                                    <td> <p>Genre</p><span class = "dots">:</span></td>
                                    <td> ${checkDataResponse(`${element.attributes.genre}`)}</td>
                                </tr>
                                <tr>
                                    <td> <p>Publication date</p><span class = "dots">:</span></td>
                                    <td> ${checkDataResponse(`${element.attributes.books.data[0].attributes.publication_date}`)}</td>
                                </tr>
                                <tr>
                                    <td> <p>Share us on</p><span class = "dots">:</span></td>
                                    <td> (+22) 123 - 456</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div class="title">
                        <div class="title-content">
                            <p class="name">About ${checkDataResponse(`${element.attributes.first_name}`)} </p>
                            <hr style="width: 55px; border: 3px solid #FFCA42; background-color: #FFCA42;">
                            <p class="intro">"${element.attributes.books.data[0].attributes.short_desc}"</p>
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
// eslint-disable-next-line import/prefer-default-export
export { showHtmlContent };
