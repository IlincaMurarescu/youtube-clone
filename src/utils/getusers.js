import users from "./users";

//mock API call
export const fetchUsers = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(users);
    }, 2500);
  });
};

export default fetchUsers;
