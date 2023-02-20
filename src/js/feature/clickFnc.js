// function checkSearch() {
//   if (window.location.search === '') {
//     window.location.search += '?';
//   }
// }
function ClickSort() {
  document.getElementById('clickSort').onclick = () => {
    // checkSearch();
    if (!(window.location.search.includes('sort=id%3Adesc&'))) {
      window.location.search += 'sort=id%3Adesc&';
    }
  };
}

function getValueParamString(paramString) {
  if (window.location.search === `?${paramString}`) {
    // eslint-disable-next-line no-param-reassign
    return '?sort=id%3Adesc&';
  }
  // eslint-disable-next-line no-param-reassign, no-unused-vars
  return 'sort=id%3Adesc&';
}

function removeClickSort() {
  document.getElementById('removeSort').onclick = () => {
    window.location.href = window.location.href.replace(getValueParamString('sort=id%3Adesc&'), '');
  };
}

// eslint-disable-next-line import/prefer-default-export
export { ClickSort, removeClickSort };
