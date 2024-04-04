import styles from "./Header.module.css";
import styled from "styled-components";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <button className={styles.button}>
          {" "}
          <img
            src="src\assets\toggle-column-svgrepo-com.svg"
            className={styles.iconw}
          ></img>
        </button>
        <img className="logo  "></img>
      </div>
      <div className={styles.formContainer}>
        <form>
          <input />
          <button className={styles.formButton}>
            <img
              src="src\assets\magnifying-glass-svgrepo-com.svg"
              className={styles.iconw}
            ></img>
          </button>
        </form>
        <button className={styles.formButton}>
          {" "}
          <img
            src="src\assets\microphone-svgrepo-com.svg"
            className={styles.iconw}
          ></img>
        </button>
      </div>
      <div className={styles.container}>
        <button className={styles.button}>
          {" "}
          <img src="src\assets\+ (3).svg" className={styles.iconh}></img>
        </button>
        <button className={styles.button}>
          {" "}
          <img
            src="src\assets\notification-4-svgrepo-com.svg"
            className={styles.iconh}
          ></img>
        </button>

        <button className={styles.avatarButton}>
          {" "}
          <img src="src\assets\+.png" className={styles.avatar}></img>
        </button>
      </div>
    </header>
  );
}
