import { Axios } from '../lib/Axios';
import { toast } from 'react-toastify';

export const getValidation = async () => {
  try {
    const res = await Axios('/api/validate/token');
    if (res.data.data === 'please sign in') toast('로그인이 필요합니다.');
    return res.data.data;
  } catch (e) {
    toast(e.response);
  }
};
