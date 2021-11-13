import React from "react";
import "tailwindcss/tailwind.css";
import "./App.css";
import SideBar from "./Components/SideBar";

function App() {
  return (
    <div className="absolute z-0 bg-hero-background bg-cover h-screen w-full">
      <div className="relative z-10 bg-black h-screen bg-opacity-50">
        <SideBar />
      </div>
    </div>
  );
}

export default App;
