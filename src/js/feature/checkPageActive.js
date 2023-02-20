// eslint-disable-next-line consistent-return
function checkPageActive() {
  // eslint-disable-next-line default-case
  switch (window.location.pathname) {
    case '/feature-author.html':
      // eslint-disable-next-line no-param-reassign
      return 'authors';
    // eslint-disable-next-line no-duplicate-case
    case '/feature-books.html':
      return 'books';
    case '/':
      return 'blogs';
  }
}
// eslint-disable-next-line import/prefer-default-export
export { checkPageActive };
