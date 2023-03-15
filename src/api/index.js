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

export const deletePost = (postId) => {
    return request.delete(`${RESOURCE_PATH}/${postId}`)
}

export const createPost = (payload) => {
    return request.post(RESOURCE_PATH, payload)
}

export const editPost = ({title, body, id}) => {
    return request.put(`${RESOURCE_PATH}/${id}`, {title, body})
}