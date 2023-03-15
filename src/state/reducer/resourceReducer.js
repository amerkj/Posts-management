const reducer = (
  state = 
    {
      resources: [],
      page: 1,
      editPostId: -1,
    },
  action
) => {
  switch (action.type) {
    case "fetchAll":
      return { ...state, resources: action.payload.posts, page: action.payload.page };
    case "createPost":
      return {...state, resources: [action.payload, ...state.resources]}
    case "deletPost":
      return {
        ...state,
        resources: state.resources.filter((item) => item.id !== action.payload.id),
      };

    case "setEditPost":
      return {...state, editPostId: action.payload.id}

    case "editPost":
      const resources = state.resources.map((post) => post.id !== action.payload.id ? post : action.payload)

      return {...state, resources, editPostId: -1 }
    default:
      return state;
  }
};
export default reducer;
