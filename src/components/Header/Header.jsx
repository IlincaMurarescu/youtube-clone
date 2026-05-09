import styles from "./Header.module.css";
import styled from "styled-components";

import menu from "/src/assets/header/toggle-column-svgrepo-com.svg";
import logo from "/src/assets/header/new-youtube-logo-840x402.jpg";
import glass from "/src/assets/header/magnifying-glass.svg";
import microphone from "/src/assets/header/microphone-svgrepo-com.svg";
import notification from "/src/assets/header/notification-4-svgrepo-com.svg";
import camera from "/src/assets/header/+ (3).svg";
import avatar from "/src/assets/header/+.png";

export default function Header({ setSidebar }) {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <button className={styles.button}>
          {" "}
          <img
            src={menu}
            className={styles.iconw}
            onClick={() =>
              setSidebar((prev) => (prev === false ? true : false))
            }
          ></img>
        </button>
        <img src={logo} className={styles.logo}></img>
      </div>
      <div className={styles.formContainer}>
        <form>
          <input type="text" placeholder="Search" />
          <button className={styles.formButton1}>
            <img src={glass} className={styles.iconlens}></img>
          </button>
        </form>
        <button className={styles.formButton}>
          {" "}
          <img src={microphone} className={styles.iconw}></img>
        </button>
      </div>
      <div className={styles.container}>
        <button className={styles.button}>
          {" "}
          <img src={camera} className={styles.iconh}></img>
        </button>
        <button className={styles.button}>
          {" "}
          <img src={notification} className={styles.iconh}></img>
        </button>

        <button className={styles.avatarButton}>
          {" "}
          <img src={avatar} className={styles.avatar}></img>
        </button>
      </div>
    </header>
  );
}
