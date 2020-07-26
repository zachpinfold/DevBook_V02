import { GET_NEWS_POST, NEWS_ERROR } from "../actions/types";

const initialState = {
  news: null,
  loading: true,
  error: {}
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_NEWS_POST:
      return { ...state, news: payload, loading: false };
    case NEWS_ERROR:
      return { ...state, error: payload, loading: false };
    default:
      return state;
  }
}
