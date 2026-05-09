import videos from "./videos";

//mock API call
export const fetchVideos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(videos);
    }, 2500);
  });
};

export default fetchVideos;
