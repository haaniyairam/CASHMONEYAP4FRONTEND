import axios from "axios";
import React from "react";

export default async function getUserData() {
  const url = `http://127.0.0.1:8000/api/v1/get-user-data`;
  try {
    const resp = await axios.get(url);
    console.log(resp);
    return resp;
  } catch (error) {
    console.log(error);
  }
}
