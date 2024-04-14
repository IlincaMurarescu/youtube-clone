import videos from "./videos";

// Funcția care returnează entitatea cu un ID dat
export const fetchVideoById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(id);
      const video = videos.find((video) => video.id == id);
      if (video) {
        resolve(video);
      } else {
        reject(new Error("Video not found"));
      }
    }, 2500);
  });
};

export default fetchVideoById;
