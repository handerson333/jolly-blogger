import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://jolly-blog-default-rtdb.firebaseio.com/',
});

export default instance;
