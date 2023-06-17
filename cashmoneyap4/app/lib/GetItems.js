import React, { useContext } from "react";

import axios from "axios";

export default async function GetItems() {
  const url = `http://127.0.0.1:8000/api/v1/get-items`;
  try {
    const resp = await axios.get(url);
    return resp;
  } catch (error) {
    console.log(error);
  }
}
