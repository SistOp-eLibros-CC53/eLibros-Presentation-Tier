import axios from "axios";

export default axios.create({
    baseURL: 'https://my-json-server.typicode.com/Jemisas/APIs_so',
    headers: { 'Content-type': 'application/json' }
});