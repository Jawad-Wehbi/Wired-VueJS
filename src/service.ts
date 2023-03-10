// import axios, { AxiosResponse } from 'axios';
// interface User {
//   id: number;
//   name: string;
//   email: string;
// }
// const baseUrl = 'https://api.wired.sowlutions.com/api/v2';
// // Get all users
// const getTasks = async (): Promise<User[]> => {
//   const response: AxiosResponse<User[]> = await axios.get(baseUrl);
//   return response.data;
// };
// // Get user by ID
// const getUserById = async (id: number): Promise<User> => {
//   const response: AxiosResponse<User> = await axios.get(`${baseUrl}/${id}`);
//   return response.data;
// };
// // Create user
// const createUser = async (user: User): Promise<User> => {
//   const response: AxiosResponse<User> = await axios.post(baseUrl, user);
//   return response.data;
// };
// // Update user
// const updateUser = async (id: number, user: User): Promise<User> => {
//   const response: AxiosResponse<User> = await axios.put(
//     `${baseUrl}/${id}`,
//     user
//   );
//   return response.data;
// };
// // Delete user
// const deleteUser = async (id: number): Promise<void> => {
//   await axios.delete(`${baseUrl}/${id}`);
// };
// // Example usage:
// (async () => {
//   const users = await getTasks();
//   console.log(users);
//   const newUser: User = {
//     id: 5,
//     name: 'John Doe',
//     email: 'johndoe@email.com',
//   };
//   const createdUser = await createUser(newUser);
//   console.log(createdUser);
//   const updatedUser = await updateUser(5, { ...createdUser, name: 'Jane Doe' });
//   console.log(updatedUser);
//   await deleteUser(5);
// })();

import axios from 'axios';

const baseURL = 'https://api.wired.sowlutions.com/api/v2';

const axiosInstance = axios.create({
  baseURL: baseURL,
});

// Add authorization token to headers
const token = localStorage.getItem('auth_token');

export async function get(urlPath: string, params = {}) {
  try {
    const response = await axiosInstance.get(`${urlPath}`, {
      params: params,
      headers: {
        Authorization: `${token}`,
      },
    });
    return response;
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function post(urlPath: string, body: object = {}) {
  try {
    const response = await axiosInstance.post(`${urlPath}`, body, {
      headers: {
        Authorization: `${token}`,
      },
    });
    return response;
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function put(urlPath: string, body: object = {}) {
  try {
    const response = await axiosInstance.put(`${urlPath}`, body, {
      headers: {
        Authorization: `${token}`,
      },
    });
    return response;
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function deleteData(urlPath: string, params = {}) {
  try {
    const response = await axiosInstance.delete(`${urlPath}`, {
      params: params,
      headers: {
        Authorization: `${token}`,
      },
    });
    return response;
  } catch (error: any) {
    throw new Error(error);
  }
}
