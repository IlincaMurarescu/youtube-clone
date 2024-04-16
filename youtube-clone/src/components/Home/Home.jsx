import Sidebar from "../Sidebar/Sidebar";
import Feed from "../Feed/Feed";
import "./Home.css";

export default function Home({ sidebar }) {
  let status = sidebar === true ? "smaller-container" : "large-container";

  return (
    <>
      <Sidebar sidebar={sidebar}></Sidebar>
      <div className={`main-container ${status} `}>
        <Feed></Feed>
      </div>
    </>
  );
}
