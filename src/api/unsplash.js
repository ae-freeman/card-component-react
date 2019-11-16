import axios from 'axios'; //axios makes the api call

export default axios.create({ //export is so  can be used elsewhere. 
    //use axios.create to create a base url and include authorisation so that all gets sent when api call made

    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID db4db195867ab0c4da987521f265e73592f74e719583e8c5f82a3f6dd42dc2a5" 
    }
});