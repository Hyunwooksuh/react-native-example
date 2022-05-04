import axiosInstance from "../../../helpers/axiosInterceptor";

export default ({
    email,
    password,
    username,
    firstName: first_name,
    lastName: last_Name,
  }) =>
  (dispatch) => {
    axiosInstance
      .post("auth/register", {
        email,
        password,
        username,
        first_name,
        last_Name,
      })
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: REGISTER_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: REGISTER_FAIL,
          payload: err.response ? err.response.data : { error: "Something" },
        });
      });
  };
