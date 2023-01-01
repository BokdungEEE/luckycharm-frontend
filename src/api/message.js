import { Axios } from '../lib/Axios';

export const sendMessage = async (messageObj) => {
  const friendKey = localStorage.getItem('friendKey');
  /* 
  const res = await Axios.post(`/posts/${friendKey}`,{
    messageObj
  });
  */
  console.log('send obj', messageObj);
  // return res;
};
