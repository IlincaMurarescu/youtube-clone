import styles from "./VideoPlayer.module.css";
import like from "../../assets/videoplayer/like.svg";
import dislike from "../../assets/videoplayer/dislike.svg";
import share from "../../assets/videoplayer/share.svg";
import { Link, useNavigate, useParams } from "react-router-dom";
import getVideo from "../../utils/getvideobyid";
import { useState, useEffect } from "react";
import myvideo from "../../assets/videos/3045714-hd_1920_1080_25fps.mp4";

export default function VideoPlayer({ sidebar }) {
  const [video, setVideo] = useState(null);

  const { videoId } = useParams();

  const navigate = useNavigate();
  const fetchVideo = async () => {
    const response = await getVideo(videoId);
    const data = await response;

    if (data.id) {
      setVideo(data);
      console.log(data);
      console.log(data.video);
    } else {
      navigate("/404");
    }
  };

  useEffect(() => {
    fetchVideo();
  }, [videoId]);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.playVideo}>
        <video
          src={video?.video}
          type="video/mp4"
          autoPlay
          muted
          controls
        ></video>
        <h3>{video?.title}</h3>
        <div className={styles.flexContainer}>
          <div className={styles.userData}>
            <img src={video?.owner.avatar}></img>
            <div className={styles.smallContainer}>
              <p className={styles.username}>{video?.owner.username}</p>
              <p className={styles.subscribers}> 436 Subscribers</p>
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
        <div className={styles.description}>{video?.description}</div>
        <div className={styles.commentsContainer}>
          <h4>Comments</h4>{" "}
          <div className={styles.comments}>
            {video ? (
              video.comments.map((comment) => (
                <div key={comment.user} className={styles.comment}>
                  <img
                    className={styles.commentAvatar}
                    src={comment.user.avatar}
                  ></img>
                  <div className={styles.commentContainer}>
                    <p className={styles.commentUsername}>
                      {comment.user.username}
                    </p>
                    <p className={styles.commentContent}>{comment.content}</p>
                  </div>
                </div>
              ))
            ) : (
              <p>Loading comments...</p>
            )}
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
