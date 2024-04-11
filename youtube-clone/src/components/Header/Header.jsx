import styles from "./Header.module.css";
import styled from "styled-components";

export default function Header({ setSidebar }) {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <button className={styles.button}>
          {" "}
          <img
            src="src\assets\header\toggle-column-svgrepo-com.svg"
            className={styles.iconw}
            onClick={() =>
              setSidebar((prev) => (prev === false ? true : false))
            }
          ></img>
        </button>
        <img
          src="src\assets\header\new-youtube-logo-840x402.jpg"
          className={styles.logo}
        ></img>
      </div>
      <div className={styles.formContainer}>
        <form>
          <input type="text" placeholder="Search" />
          <button className={styles.formButton1}>
            <img
              src="src\assets\header\magnifying-glass.svg"
              className={styles.iconlens}
            ></img>
          </button>
        </form>
        <button className={styles.formButton}>
          {" "}
          <img
            src="src\assets\header\microphone-svgrepo-com.svg"
            className={styles.iconw}
          ></img>
        </button>
      </div>
      <div className={styles.container}>
        <button className={styles.button}>
          {" "}
          <img src="src\assets\header\+ (3).svg" className={styles.iconh}></img>
        </button>
        <button className={styles.button}>
          {" "}
          <img
            src="src\assets\header\notification-4-svgrepo-com.svg"
            className={styles.iconh}
          ></img>
        </button>

        <button className={styles.avatarButton}>
          {" "}
          <img src="src\assets\header\+.png" className={styles.avatar}></img>
        </button>
      </div>
    </header>
  );
}
