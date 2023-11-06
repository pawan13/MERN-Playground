import axios from "axios";

import { setDisplay } from "./DisplaySlice";

const API_URL =
  process.env.NODE_ENV !== "production" ? "/" : "http://localhost:3000/";

// const API_URL = "http://localhost:3000/";

export const getAllStrAction = () => async (dispatch) => {
  try {
    console.log(`Getting All Strings`);
    const { data } = await axios.get(`${API_URL}api/v1/str`);
    console.log(`Data:${data}`);
    dispatch(setDisplay(data.data));
  } catch (error) {
    console.log("error", error);
  }
};

export const postStrAction = (body) => async (dispatch) => {
  try {
    console.log(`Posting all Strings`);
    const { data } = await axios.post(`${API_URL}api/v1/str`, body);
    dispatch(getAllStrAction(data.data));
  } catch (error) {
    console.log("error", error);
  }
};
