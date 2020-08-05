import { GET_NEWS_POST, NEWS_ERROR } from "./types";
import API from "../config/config";

// Get News
export const getNews = id => async dispatch => {
  try {
    const res = await fetch(
      "https://newsapi.org/v2/everything?q=developer&pageSize=1",
      {
        headers: {
          "X-API-KEY": API.API.news
        }
      }
    );

    const response = await res.json();

    // console.log(response.articles[0].title);

    dispatch({
      type: GET_NEWS_POST,
      payload: response.articles[0]
    });
  } catch (err) {
    dispatch({
      type: NEWS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// fetch("https://newsapi.org/v2/everything?q=developer", {
//   headers: {
//     "X-API-KEY": API.API.news
//   }
// })
//   .then(response => {
//     console.log(response);
//     return response.json();
//   })
//   .then(json => {
//     console.log(json.articles[0]);
//   });
