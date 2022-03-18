import axios from 'axios';

const Axios = axios.create({
  baseURL: 'https://calendarific.com/api/v2/',
});

Axios.interceptors.request.use(
  (config) => {
    config.params = {
      ...config.params,
      api_key: 'eebd9d6ee2ccbd074ada80745d63735c519bf5b3',
    };
    return config;
  },
  (error) => {
    console.log(error);
  }
);

export default Axios;
