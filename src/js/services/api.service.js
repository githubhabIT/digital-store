const axios = require('axios');
const API_TOKEN = 'yYNfW8ynVO18L1TW5qIkILM1WtWgrVZz';

class ApiService {
    constructor(baseUrl) {
        this.url = baseUrl;
    }

    async getItems(sorting) {
        try {
            if (sorting) {
                const request = `${this.url}store-api?auth=${API_TOKEN}&option=all&sorting=${sorting}`;
                return useRequest(request); 
            } else {
                const request = `${this.url}store-api?auth=${API_TOKEN}&option=all`;
                return useRequest(request); 
            }
            
        } catch (err) {
            console.error(err);
        }
    }

    async getItemsOne(category, sorting) {
        try {
            if (sorting) {
                const request = `${this.url}store-api?auth=${API_TOKEN}&category=${category}&sorting=${sorting}`;
                return useRequest(request);
            } else {
                const request = `${this.url}store-api?auth=${API_TOKEN}&category=${category}`;
                return useRequest(request);
            }
        } catch (err) {
            console.error(err);
        }
    }
}

async function useRequest(request) {
    const response = await axios.get(request);
    return await JSON.parse(response.request.response);
}

export const apiService = new ApiService('http://localhost:3000/', API_TOKEN);