import { AccessTokenKey } from '../consts/LocalStorageKey';
import { Axios } from '../lib/Axios';

export const login = async (code) => {
  try {
    const res = await Axios(`/oauth?code=${code}`);
    const { accessToken } = res.data.data;
    Axios.defaults.headers.Authorization = `Bearer ${accessToken}`;
    localStorage.setItem(AccessTokenKey, accessToken);
  } catch (e) {
    alert('잘못된 요청입니다.');
  }
};
