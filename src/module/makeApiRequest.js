import axios from 'axios';

export const makeGetApiRequest = async ({ BASE_URL, endpoint, options }) => {
  try {
    const response = await axios.get(BASE_URL + endpoint, { options });
    return response.data;
  } catch (err) {
    if (err.response?.data) {
      alert(JSON.stringify(err.response.data));
    } else {
      alert(JSON.stringify(err));
    }
  }
};
