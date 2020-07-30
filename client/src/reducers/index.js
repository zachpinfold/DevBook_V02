import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import news from "./news";
import profile from "./profile";
import post from "./post";

export default combineReducers({
  alert,
  auth,
  news,
  profile,
  post
});
