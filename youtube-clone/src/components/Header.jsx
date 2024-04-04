import styles from "./Header.module.css";

export default function Header() {
  return (
    <header>
      <div className="container">
        <button className="toggle button-round ">Toggle</button>
        <img className="logo  "></img>
      </div>
      <div className="container ">
        <form>
          <input />
          <button>Lens icon</button>
        </form>
        <button>Microphone icon</button>
      </div>
      <div className="container">
        <button>Camera</button>
        <button>Notifications</button>

        <button>Avatar</button>
      </div>
    </header>
  );
}
