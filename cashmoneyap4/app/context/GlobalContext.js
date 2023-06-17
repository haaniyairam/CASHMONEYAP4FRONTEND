"use client";
import React, { useContext } from "react";
import { createContext } from "react";

export const GlobalContext = createContext({});

export const useGlobalContext = () => useContext(GlobalContext);
