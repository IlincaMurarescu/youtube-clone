import styled from "styled-components";
import "./Sidebar.css";
import "../../styles/global.css";

export default function Sidebar({ sidebar }) {
  return (
    <div className={` sidebar ${sidebar ? "" : "small-sidebar"}`}>
      <div className="subscribed-list">
        <h3>Subscribed</h3>
        <div className="side-links">
          <div className="side-link">
            <img src="src\assets\sidebar\trophy.svg"></img> <p>Cineva</p>
          </div>
          <div className="side-link">
            <img src="ceva"></img> <p>Cineva</p>
          </div>
          <div className="side-link">
            <img src="ceva"></img> <p>Cineva</p>
          </div>
          <div className="side-link">
            <img src="ceva"></img> <p>Cineva</p>
          </div>
        </div>
      </div>

      <div className="explore shortcut-link">
        <h3>Explore</h3>
        <div className="side-link">
          <img src="src\assets\sidebar\home-filled.svg" alt="" className="" />
          <p>Home</p>
        </div>
        <div className="side-link">
          <img src="src\assets\sidebar\music-note.svg" alt="" className="" />
          <p>Music</p>
        </div>
        <div className="side-link ">
          <img src="src\assets\sidebar\gaming.svg" alt="" className="" />
          <p>Gaming</p>
        </div>
        <div className="side-link">
          <img src="src\assets\sidebar\trophy.svg" alt="" className="" />
          <p>Sport</p>
        </div>
        <div className="side-link">
          <img src="src\assets\sidebar\podcast.svg" alt="" className="" />
          <p>Podcasts</p>
        </div>
      </div>
    </div>
  );
}
