export interface User {
  address: {
    city: string;
  };
  id: number;
  name: string;
  status: Status;
}

export type Status = "available" | "non-available";

export type getUsers = () => Promise<User[]>;

export const getUsers: getUsers = function() {
  const url = "http://jsonplaceholder.typicode.com/users";
  return fetch(url)
    .then(res => res.json());
};
