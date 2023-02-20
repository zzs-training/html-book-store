import { ratingFirst, addEventToElement, showHtmlContent } from './feature';
import { showHtmlContentBooks } from './designCardBook';
import { checkParamsLocal } from './checkparamsfromUrlClient';
import { checkPageActive } from './checkPageActive';
import { ClickSort, removeClickSort } from './clickFnc';

const Service = require('../services/book.service');

function loadPage() {
  window.onload = () => {
    // Declare parameter and library for Service API
    const parameters = {
      populate: '*',
    };
    const activePage = checkPageActive();
    // Call func for page by page
    if (activePage === 'blogs') {
      ratingFirst();
      addEventToElement();
    } else {
      ClickSort();
      removeClickSort();
    }
    // check Parameters before run API let can call API for features.
    checkParamsLocal(parameters);
    // Run API after params and library is defined
    Service.fetch(activePage, parameters)
      .then((response) => {
        console.log(response.data);
        // Choose style card for page by page
        if (activePage === 'authors') {
          showHtmlContent(response.data, 'showContent');
        } else if (activePage === 'books') {
          showHtmlContentBooks(response.data, 'showContent');
        }
      });
  };
}

// eslint-disable-next-line import/prefer-default-export
export { loadPage };
