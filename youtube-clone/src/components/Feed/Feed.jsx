import "./Feed.css";
import "../../index.css";
import { Link } from "react-router-dom";
import getVideos from "../../utils/getvideos";
import { useState } from "react";
import { useEffect } from "react";

export default function Feed() {
  const [videos, setVideos] = useState([]);

  function calculateTimePassed(postedAt) {
    const postedDate = new Date(postedAt);
    const currentDate = new Date();

    const timeDifference = currentDate - postedDate;

    const millisecondsInHour = 1000 * 60 * 60;
    const millisecondsInDay = millisecondsInHour * 24;
    const millisecondsInMonth = millisecondsInDay * 30;
    const millisecondsInYear = millisecondsInDay * 365;

    const hoursPassed = Math.floor(timeDifference / millisecondsInHour);
    const daysPassed = Math.floor(timeDifference / millisecondsInDay);
    const monthsPassed = Math.floor(timeDifference / millisecondsInMonth);
    const yearsPassed = Math.floor(timeDifference / millisecondsInYear);

    if (yearsPassed > 0) {
      return yearsPassed + (yearsPassed === 1 ? " year" : " years") + " ago";
    } else if (monthsPassed > 0) {
      return (
        monthsPassed + (monthsPassed === 1 ? " month" : " months") + " ago"
      );
    } else if (daysPassed > 0) {
      return daysPassed + (daysPassed === 1 ? " day" : " days") + " ago";
    } else {
      return hoursPassed + (hoursPassed === 1 ? " hour" : " hours") + " ago";
    }
  }

  const fetchData = async () => {
    const response = await getVideos();
    setVideos(response);
    console.log(response);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="feed">
      {videos.length ? (
        videos.map((video) => (
          <Link key={video.id} to={`video/${video.id}`} className="card">
            <img className="thumbnail-image" src={video.thumbnail}></img>{" "}
            <div className="   bottom-container  flex">
              <img className="thumbnail-avatar" src={video.owner.avatar}></img>{" "}
              <div className="vertical-container">
                <h3>{video.title}</h3> <p>{video.owner.username}</p>
                <p>
                  {video.views} views • {calculateTimePassed(video.posted_at)}{" "}
                </p>{" "}
              </div>
            </div>
          </Link>
        ))
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
