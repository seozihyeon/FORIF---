"use client";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";
import Specifics from "@/components/Specifics";
import { use, useEffect, useState } from "react";
import darkModeStore from "@/store/darkModeStore";
import { observer } from "mobx-react";

const Home = observer(() => {
  const darkMode = darkModeStore.isDarkMode

  return (
    <div>
      {darkMode ? (<div>DARK!</div>) : (<div>WHITE!</div>)}
      <button onClick={() => {
        darkModeStore.setDarkMode(!darkMode);
        }}
        >
          Chande Mode
          </button>
    </div>
  );
});


export default Home;