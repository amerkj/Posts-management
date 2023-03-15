import { fetchPosts } from "api"

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

export const withdrowMoney=(amount)=>{
    return (dispatch)=>{
        dispatch({
            type:'withdrow',
            payload:amount,
        })
    }
}