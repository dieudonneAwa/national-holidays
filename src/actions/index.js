/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line arrow-parens
// eslint-disable-next-line arrow-body-style
export const selectCountry = country => {
  return {
    type: 'COUNTRY_SELECTED',
    payload: country
  };
};
