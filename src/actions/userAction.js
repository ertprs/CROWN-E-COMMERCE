import history from "../history/history";

export const setCurrentUser = (user) => {
  return (dispatch) => {
    dispatch({ type: "SET_CURRENT_USER", payload: user });
  };
};
