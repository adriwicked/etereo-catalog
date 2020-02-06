import axios from 'axios'

const BASE_URL = "http://localhost:3001/phones";

function getPhoneList() {
    return axios.get(BASE_URL)
}
    
export default getPhoneList;