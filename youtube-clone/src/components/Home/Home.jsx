import Sidebar from "../Sidebar/Sidebar";
import Feed from "../Feed/Feed";

import "./Home.css";

export default function Home({ isSidebarOpen }) {
  let status = isSidebarOpen === true ? "smaller-container" : "large-container";

  return (
    <>
      <Sidebar isSidebarOpen={isSidebarOpen}/>
      <div className={`main-container ${status} `}>
        <Feed></Feed>
      </div>
    </>
  );
}
