import React from "react";
import "./styles.css";

import NavBar from "./components/navbar/Navbar";
import CustomRouter from "./components/customRouter/CustomRouter";
import { MainRoutes } from "./routes/MainRoutes";

export default function App() {
  return (
    <div className="App dark-bg light-text">
      <NavBar Routes={MainRoutes} />
      <CustomRouter Routes={MainRoutes} />
    </div>
  );
}
