import Sidebar from "../Sidebar/Sidebar";
import Feed from "../Feed/Feed";
import "./Home.css";
import { useState } from "react";

export default function Home({ sidebar }) {
  let status = sidebar === true ? "smaller-container" : "large-container";

  const [category, setCategory] = useState(0);

  return (
    <>
      <Sidebar
        sidebar={sidebar}
        category={category}
        setCategory={setCategory}
      ></Sidebar>
      <div className={`main-container ${status} `}>
        <Feed></Feed>
      </div>
    </>
  );
}
