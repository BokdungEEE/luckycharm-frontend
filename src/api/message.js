import { Axios } from '../lib/Axios';
import { toast } from 'react-toastify';

export const sendMessage = async (messageObj, friendKey) => {
  try {
    await Axios.post(`/api/posts?receiver=${friendKey}`, messageObj);
  } catch (e) {
    if (e.response.status === 400) {
      toast('로그인이 필요합니다.');
    }
  }
};
