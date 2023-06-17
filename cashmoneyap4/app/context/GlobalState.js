"use client";
import React, { useState } from "react";
import { GlobalContext } from "./GlobalContext";

export const GlobalState = ({ children }) => {
  const [test, setTest] = useState("mom");
  return (
    <GlobalContext.Provider value={{ test, setTest }}>
      {children}
    </GlobalContext.Provider>
  );
};

// todo: use the get user data route
