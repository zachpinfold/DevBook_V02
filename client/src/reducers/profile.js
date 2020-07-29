import {
  GET_PROFILE,
  PROFILE_ERROR,
  CLEAR_PROFILE,
  UPDATE_PROFILE,
  GET_PROFILES,
  GET_REPOS,
  GET_EXPERIENCES,
  UPDATE_EXPERIENCES
} from "../actions/types";

const initialState = {
  profile: null,
  experiences: [],
  profiles: [],
  repos: [],
  loading: true,
  error: {}
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  // console.log(state);

  switch (type) {
    case UPDATE_PROFILE:
    case GET_PROFILE:
      return { ...state, profile: payload, loading: false };
    case UPDATE_EXPERIENCES:
    case GET_EXPERIENCES:
      return { ...state, experiences: payload, loading: false };
    case GET_PROFILES:
      return {
        ...state,
        profiles: payload,
        loading: false
      };
    case PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        profile: null
      };
    case CLEAR_PROFILE:
      return {
        ...state,
        profile: null,
        repos: [],
        loading: false
      };
    case GET_REPOS:
      return {
        ...state,
        repos: payload,
        loading: false
      };
    default:
      return state;
  }
}
