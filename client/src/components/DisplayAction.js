import axios from "axios";

const setDisplay = require("./DisplaySlice");

const API_URL = process.env.NODE_ENV !== "production" ? "/" : "/";

export const getAllStrAction = () => async (dispatch) => {
  try {
    console.log(`Getting All Strings`);
    const data = await axios.get(`${API_URL}api/v1/str`);
    console.log(`Data:${data}`);
    dispatch(setDisplay(data.data));
  } catch (error) {
    console.log("error", error);
  }
};

export const postStrAction = (body) => async (dispatch) => {
  try {
    console.log(`Posting all Strings`);
    const data = await axios.post(`${API_URL}api/v1/str`, body);
    dispatch(getAllStrAction(data.data));
  } catch (error) {}
};
