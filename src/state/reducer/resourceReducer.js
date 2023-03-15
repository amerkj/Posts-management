const reducer = (
  state = 
    {
      resources: [],
      page: 1,
    },
  action
) => {
  switch (action.type) {
    case "fetchAll":
      return { resources: action.payload.posts, page: action.payload.page };
      break;
    case "withdrow":
      return state - action.payload;
      break;
    default:
      return state;
  }
};
export default reducer;
