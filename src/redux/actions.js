import getPhoneList from '../services/phones'

export const FETCH_PHONES_REQUEST = 'FETCH_PHONES_REQUEST';
export const FETCH_PHONES_SUCCESS = 'FETCH_PHONES_SUCCESS';
export const FETCH_PHONES_FAILURE = 'FETCH_PHONES_FAILURE';

const fetchPhonesRequest = () => ({ type: FETCH_PHONES_REQUEST });
const fetchPhonesSuccess = phoneList => ({ type: FETCH_PHONES_SUCCESS, payload: phoneList });
const fetchPhonesError = error => ({ type: FETCH_PHONES_FAILURE, payload: error });

export function fetchPhones() {
  return (dispatch) => {
    dispatch(fetchPhonesRequest());
    return getPhoneList()
      .then(({ data: phoneList }) => dispatch(fetchPhonesSuccess(phoneList)))
      .catch(({ message }) => dispatch(fetchPhonesError(message)));
  }
}