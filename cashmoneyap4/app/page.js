"use client";
import Navbar from "./components/navbar";
import Front from "./components/front";
import Search from "./components/search";
import { useContext } from "react";
import { useGlobalContext } from "./context/GlobalContext";

export default function Home() {
  const { test } = useGlobalContext();
  return (
    <div className="bg-[#e7e8e2] min-h-screen overflow-x-hidden">
      <Navbar></Navbar>
      <Front></Front>
      <Search></Search>
    </div>
  );
}
