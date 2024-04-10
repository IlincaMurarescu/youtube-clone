import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Home from "./components/Home/Home";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App({ sidebar }) {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header>.</Header>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>

        <Route
          path="/video/:categoryId/:videoId"
          element={<p>aici va fi pagina cu videos</p>}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
