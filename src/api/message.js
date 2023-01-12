import { FriendKey } from '../consts/LocalStorageKey';
import { Axios } from '../lib/Axios';

export const sendMessage = async (messageObj, friendKey) => {
  try {
    await Axios.post(`/api/posts?receiver=${friendKey}`, messageObj);
  } catch (e) {
    alert(e.response);
  }
};
