import { fetchPosts ,deletePost, createPost, editPost} from "api"

export const fetchPostsAction = ({ page, limit }) => {
  return (dispatch) => {
    fetchPosts(page, limit).then((res) => {
      dispatch({
        type: "fetchAll",
        payload: { posts: res, page },
      });
    });
  };
};

export const deletePostAction=({id})=>{
    return (dispatch)=>{
      deletePost(id).then((res)=>{
        dispatch({
          type: "deletPost",
          payload: {id},
        });
      })
    }
}

export const createPostAction=(payload) => {
  return (dispatch)=>{
    createPost(payload).then((res)=>{
      dispatch({
        type: "createPost",
        payload: res.data,
      });
    })
  }
}


export const setEditPost = ({id}) => {
  return (dispatch)=>{
      dispatch({
        type: "setEditPost",
        payload: {id},
      });
  }
}

export const editPostAction = (payload) => {
  return (dispatch)=>{
    editPost(payload).then((res)=>{
      dispatch({
        type: "editPost",
        payload: res.data,
      });
    })
  }
}

export const cancelEditing = () => {
  return (dispatch)=>{
    dispatch({
      type: "setEditPost",
      payload: {id: -1},
    });
}}