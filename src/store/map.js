import axios from 'axios';

const MARK_COUNTRY = 'MARK_COUNTRY';
const ADD_CITY = 'ADD_CITY';

export const markCountry = country => ({
  type: MARK_COUNTRY,
  country
});

export const addCity = city => ({
  type: ADD_CITY,
  city
})

export const fetchMarker = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/countries');
    console.log('is there any country over there???===>', data);
    dispatch(markCountry(data));
  } catch (error) {
    console.log(error);
  }
};

export const addMarker = (newCity) => async dispatch => {
  try{
    const {data} = await axios.post('/api/countries',newCity);
    dispatch(addCity(data));
  }catch(error){
    console.log(error);
  }
}

const defaultState = [];

export default function(markState = defaultState, action) {
  switch (action.type) {
    case MARK_COUNTRY:
      return action.country;
    case ADD_CITY:
      return [...markState, action.city];
    default:
      return markState;
  }
}
