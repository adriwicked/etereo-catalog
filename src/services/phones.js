import axios from 'axios'

const BASE_URL = "http://localhost:3001/phones";

function getPhoneList() {
    return axios.get(BASE_URL)
}

function getPhoneDetail(id) {
    return axios.get(`${BASE_URL}/${id}`)
}
    
export default getPhoneList;