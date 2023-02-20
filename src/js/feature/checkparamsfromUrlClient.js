/* eslint-disable no-param-reassign */
const params = new URLSearchParams(window.location.search);

function checkParamsLocal(paramsObj) {
  params.forEach((value, key) => {
    paramsObj[`${key}`] = value;
    console.log(paramsObj);
  });
}
// eslint-disable-next-line import/prefer-default-export
export { checkParamsLocal };
