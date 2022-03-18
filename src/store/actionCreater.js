import Axios from '../Axios';

export const GETTING_HOLIDAY_DATA = 'GETTING_HOLIDAY_DATA';

export const getHolidayData = (month, country, year) => (dispatch) => {
  Axios.get('holidays', {
    params: {
      month: month,
      country: country,
      year: year,
    },
  })
    .then((res) => {
      dispatch({
        type: GETTING_HOLIDAY_DATA,
        payload: res.data.response.holidays,
      });
    })
    .catch((err) => console.log(err));
};
