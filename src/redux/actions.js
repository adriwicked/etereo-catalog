import getPhoneList from '../services/phones'

export const FETCH_PHONES_REQUEST = 'FETCH_PHONES_REQUEST';
export const FETCH_PHONES_SUCCESS = 'FETCH_PHONES_SUCCESS';
export const FETCH_PHONES_FAILURE = 'FETCH_PHONES_FAILURE';

const fetchPhonesRequest = () => ({ type: FETCH_PHONES_REQUEST });
const fetchPhonesSuccess = phones => ({ type: FETCH_PHONES_SUCCESS, payload: phones });
const fetchPhonesError = error => ({ type: FETCH_PHONES_FAILURE, payload: error });



export default function fetchPhones() {
  return function (dispatch) {
    dispatch(fetchPhonesRequest());
    return getPhoneList()
      .then(({ data: phoneList }) => dispatch(fetchPhonesSuccess(phoneList)))
      .catch(({ message }) => dispatch(fetchPhonesError(message)));
  }
}