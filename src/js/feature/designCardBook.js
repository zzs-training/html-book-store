function showHtmlContentBooks(arrayAuthors, locationShowContent) {
  let html = '';
  arrayAuthors.forEach((element) => {
    html += `
    <div class="card-store">
    <img class="card-store__img" src="./assets/images/Bookstore.png" alt="">

    <div class="card-store__content">
        <div class="card-store__content__head">
            <p class="title">${element.attributes.name}</p>
            <p class="price">$${element.attributes.price}</p>
        </div>

        <p class="intro">${element.attributes.short_desc}</p>
        <p class="details">${element.attributes.publisher}</p>
    </div>

    <div class="card-store__footer">
        <div class="btnbasic btn-yellow-bgr btn-small">Order Today</div>
    </div>
</div>
      `;
  });
  console.log(html);
  document.getElementById(locationShowContent).innerHTML = html;
}
// eslint-disable-next-line import/prefer-default-export
export { showHtmlContentBooks };
