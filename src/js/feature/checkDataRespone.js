function checkDataResponse(data) {
  if (data === 'undefined' || (data.includes('Object'))) {
    // eslint-disable-next-line no-param-reassign
    data = 'Chưa có thông tin';
  }
  return data;
}
// eslint-disable-next-line import/prefer-default-export
export { checkDataResponse };
