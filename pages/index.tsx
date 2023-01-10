import React from "react";
import MainMenu from "../components/main-menu";

export default function Home() {
  return (
    <div className="flex flex-row w-screen h-screen font-inter">
      <MainMenu />
      <div className="w-80 ">B</div>
      <div className="flex-1 bg-purple-700">C</div>
    </div>
  );
}
