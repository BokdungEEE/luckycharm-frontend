import { Axios } from '../lib/Axios';

export const login = async (code) => {
  Axios.defaults.withCredentials = true;
  const res = await Axios.post(`/oauth?code=${code}`);
  const { accessToken } = res;
  localStorage.setItem('accessToken', accessToken);
  return res;
};
