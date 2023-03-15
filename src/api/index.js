import axios from 'axios';

const request = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
  });

const RESOURCE_PATH = 'posts'
export const fetchPosts = (_start = 0, _limit = 5) => {
    return request.get(RESOURCE_PATH, {params: {
        _start:_start-1, 
        _limit
    }}).then((res) => res.data)
}