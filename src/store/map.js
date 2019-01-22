import axios from 'axios';

const MARK_COUNTRY = 'MARK_COUNTRY';

export const markCountry = country => ({
  type: MARK_COUNTRY,
  country
});

export const fetchMarker = () => async dispatch => {
  try {
    const {data: country} = await axios.get('/api/countries');
    console.log('is there any country over there???===>', country);
    dispatch(markCountry(country));
  } catch (error) {
    console.log(error);
  }
};

const defaultState = [];

export default function(markState = defaultState, action) {
  switch (action.type) {
    case MARK_COUNTRY:
      return action.country;
    default:
      return markState;
  }
}
