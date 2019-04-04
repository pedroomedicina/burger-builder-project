import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-a016f.firebaseio.com/'
});

export default instance;