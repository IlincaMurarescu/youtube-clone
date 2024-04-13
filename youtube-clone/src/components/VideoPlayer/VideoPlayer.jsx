import styles from "./VideoPlayer.module.css";
import like from "../../assets/videoplayer/like.svg";
import dislike from "../../assets/videoplayer/dislike.svg";
import share from "../../assets/videoplayer/share.svg";
import { Link } from "react-router-dom";

export default function VideoPlayer() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.playVideo}>
        <video src="#">Aici va fi video</video>
        <h3>Title</h3>
        <div className={styles.flexContainer}>
          <div className={styles.userData}>
            <img src="src\assets\header\+ (3).svg"></img>
            <div className={styles.smallContainer}>
              <p className={styles.username}>Username</p>
              <p className={styles.subscribers}> Number subscribers</p>
            </div>
            <button>Subscribe</button>
          </div>
          <div className={styles.rightButtons}>
            <button>
              <img src={like}></img>
            </button>
            <button>
              {" "}
              <img src={dislike}></img>{" "}
            </button>
            <button>
              {" "}
              <img src={share}></img>
            </button>
          </div>
        </div>
        <div className={styles.description}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio,
          ad exercitationem! Quidem nemo autem, quisquam perferendis dolor
          praesentium voluptatem voluptas quae sit et laboriosam repellat magni
          vero rem. Veritatis, corporis. Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Natus consequatur, expedita quibusdam quo ut
          accusantium doloribus sunt amet! Molestias alias eligendi deserunt
          voluptates cumque exercitationem in commodi recusandae labore
          corporis.
        </div>
        <div className={styles.commentsContainer}>
          <h4>Comments</h4>
          <div className={styles.comments}>
            <div className={styles.comment}>
              <img className={styles.commentAvatar} src={share}></img>
              <div className={styles.commentContainer}>
                <p className={styles.commentUsername}>Username</p>
                <p className={styles.commentContent}>Content</p>
              </div>
            </div>
            <div className={styles.comment}>
              <img className={styles.commentAvatar} src={share}></img>
              <div className={styles.commentContainer}>
                <p className={styles.commentUsername}>Username</p>
                <p className={styles.commentContent}>Content</p>
              </div>
            </div>{" "}
            <div className={styles.comment}>
              <img className={styles.commentAvatar} src={share}></img>
              <div className={styles.commentContainer}>
                <p className={styles.commentUsername}>Username</p>
                <p className={styles.commentContent}>Content</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.sideContainer}>
        <Link to={`video/36/40`} className="card">
          <img
            className="thumbnail-image"
            src="src\assets\main-feed\thumbnail-img.jpg"
          ></img>{" "}
          <div className="   bottom-container  flex">
            <img
              className="thumbnail-avatar"
              src="src\assets\sidebar\podcast.svg"
            ></img>{" "}
            <div className="vertical-container">
              <h3>Nume video</h3> <p>Nume utilizator</p>
              <p>Numar vizualizari • nr postari</p>{" "}
            </div>
          </div>
        </Link>
        <Link to={`video/36/40`} className="card">
          <img
            className="thumbnail-image"
            src="src\assets\main-feed\thumbnail-img.jpg"
          ></img>{" "}
          <div className="   bottom-container  flex">
            <img
              className="thumbnail-avatar"
              src="src\assets\sidebar\podcast.svg"
            ></img>{" "}
            <div className="vertical-container">
              <h3>Nume video</h3> <p>Nume utilizator</p>
              <p>Numar vizualizari • nr postari</p>{" "}
            </div>
          </div>
        </Link>{" "}
        <Link to={`video/36/40`} className="card">
          <img
            className="thumbnail-image"
            src="src\assets\main-feed\thumbnail-img.jpg"
          ></img>{" "}
          <div className="   bottom-container  flex">
            <img
              className="thumbnail-avatar"
              src="src\assets\sidebar\podcast.svg"
            ></img>{" "}
            <div className="vertical-container">
              <h3>Nume video</h3> <p>Nume utilizator</p>
              <p>Numar vizualizari • nr postari</p>{" "}
            </div>
          </div>
        </Link>
        <Link to={`video/36/40`} className="card">
          <img
            className="thumbnail-image"
            src="src\assets\main-feed\thumbnail-img.jpg"
          ></img>{" "}
          <div className="   bottom-container  flex">
            <img
              className="thumbnail-avatar"
              src="src\assets\sidebar\podcast.svg"
            ></img>{" "}
            <div className="vertical-container">
              <h3>Nume video</h3> <p>Nume utilizator</p>
              <p>Numar vizualizari • nr postari</p>{" "}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
