import styled from "styled-components";

export default function Sidebar({ sidebar }) {
  return (
    <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
      <div className="sortcut-lnk"></div>
      <div className="side-link">
        <img src="home" alt="" className="" />
        <p>Home</p>
      </div>
      <div className="side-link">
        <img src="game" alt="" className="" />
        <p>Gaming</p>
      </div>
      <div className="side-link ">
        <img src="home" alt="" className="" />
        <p>Home</p>
      </div>
      <div className="side-link">
        <img src="home" alt="" className="" />
        <p>Home</p>
      </div>
      <div className="side-link">
        <img src="home" alt="" className="" />
        <p>Home</p>
      </div>
      <div className="side-link">
        <img src="home" alt="" className="" />
        <p>Home</p>
      </div>
      <div className="side-link">
        <img src="home" alt="" className="" />
        <p>Home</p>
      </div>
    </div>
  );
}
