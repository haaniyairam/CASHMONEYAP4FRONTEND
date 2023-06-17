import axios from "axios";
import React from "react";

export default async function logout() {
  const url = `http://127.0.0.1:8000/api/v1/logout`;
  try {
    const resp = await axios.post(url);
    console.log(resp);
    return resp;
  } catch (error) {
    console.log(error);
  }
}
