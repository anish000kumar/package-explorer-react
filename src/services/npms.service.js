import axios from 'axios';
const baseUrl = 'https://api.npms.io/v2/search';

export default {
    getSuggestions(query){
        query = query.split(' ').join('+');
        return axios.get(`${baseUrl}/suggestions?q=${query}`)
    },
    getPackageDetail(pkg){
        return axios.get(`${baseUrl}/${pkg}`)
    }
}