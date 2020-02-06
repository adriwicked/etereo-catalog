import {
  FETCH_PHONES_REQUEST,
  FETCH_PHONES_SUCCESS,
  FETCH_PHONES_FAILURE 
} from './actions';

const initialState = {
  loading: false,
  phoneList: [],
  error: ''
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PHONES_REQUEST:
      return { ...state, loading: true }

    case FETCH_PHONES_SUCCESS:
      return { ...state, loading: false, phoneList: action.payload, error: '' }

    case FETCH_PHONES_FAILURE:
      return { ...state, loading: false, phoneList: [], error: action.payload }
  
    default:
      return state;
  }
}