import { FriendKey } from '../consts/LocalStorageKey';
import { Axios } from '../lib/Axios';

export const sendMessage = async (messageObj) => {
  const friendKey = localStorage.getItem(FriendKey);
  try {
    await Axios.post(`/posts?receiver=${friendKey}`, {
      messageObj,
    });
  } catch (e) {
    console.log(e);
  }
};
