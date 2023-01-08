import { Axios } from '../lib/Axios';
export const getReceived = async () => {
  try {
    const res = await Axios('/api/users/me/after');
    return res.data.data;
  } catch (e) {
    console.log(e);
  }
};
