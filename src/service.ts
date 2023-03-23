import axios from 'axios';

const baseURL = 'https://api.wired.sowlutions.com/api/v2';

const axiosInstance = axios.create({
  baseURL,
});

// Add authorization token to headers
const token = localStorage.getItem('auth_token');

export async function get(urlPath: string, params = {}) {
  try {
    const response = await axiosInstance.get(`${urlPath}`, {
      params,
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
      params,
      headers: {
        Authorization: `${token}`,
      },
    });
    return response;
  } catch (error: any) {
    throw new Error(error);
  }
}
