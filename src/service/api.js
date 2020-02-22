import axios from 'axios';

const api = axios.create({
    baseURL: 'https://avainformatica-io.umbler.net' 
});
 
export default api;