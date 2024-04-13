import Sidebar from "../Sidebar/Sidebar";
import Feed from "../Feed/Feed";
import "./Home.css";

export default function Home({ sidebar }) {
  return (
    <>
      <Sidebar sidebar={sidebar}></Sidebar>
      <div className={`main-container ${sidebar}?"":"large-container"`}>
        <Feed></Feed>
      </div>
    </>
  );
}
