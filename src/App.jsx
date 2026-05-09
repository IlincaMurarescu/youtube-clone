import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";

function App() {
  const [sidebar, setSidebar] = useState(true);

  return (
    <>
      <Header setSidebar={setSidebar}>.</Header>
      <Routes>
        <Route path="/" element={<Home sidebar={sidebar}></Home>}></Route>

        <Route
          path="/:videoId"
          element={<VideoPlayer sidebar={sidebar} />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
