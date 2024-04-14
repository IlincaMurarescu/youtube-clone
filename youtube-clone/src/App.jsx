import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Home from "./components/Home/Home";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";

function App() {
  const [sidebar, setSidebar] = useState(true);

  return (
    <>
      <Header setSidebar={setSidebar}>.</Header>

      <Routes>
        <Route path="/" element={<Home sidebar={sidebar}></Home>}></Route>

        <Route path="/video/:videoId" element={<VideoPlayer />}></Route>
      </Routes>
    </>
  );
}

export default App;
