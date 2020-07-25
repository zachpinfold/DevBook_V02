import { SET_ALERT, REMOVE_ALERT } from "./types";

export const setAlert = (msg, alertType, remove) => dispatch => {
  const id = alertType;
  if (!remove) {
    dispatch({
      type: SET_ALERT,
      payload: { msg, alertType, id }
    });
  }
  if (remove === "remove") {
    dispatch({ type: REMOVE_ALERT, payload: id });
  }
};
