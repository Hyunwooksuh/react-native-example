const auth = (state, { type, payload }) => {
  switch (type) {
    case REGISTER_LOADING:
      console.log(state, type, payload);
      return {};
    default:
      return state;
  }
};

export default auth;
