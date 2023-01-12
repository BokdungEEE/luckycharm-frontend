import { Axios } from '../lib/Axios';

export const sendMessage = async (messageObj, friendKey) => {
  try {
    const res = await Axios.post(
      `/api/posts?receiver=${friendKey}`,
      messageObj,
    );
    return res;
  } catch (e) {
    if (e.response.status === 400) {
      alert('잘못된 요청입니다.');
    }
  }
};
