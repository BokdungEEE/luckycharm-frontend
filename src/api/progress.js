import { Axios } from '../lib/Axios';
export const getProgress = async () => {
  try {
    const res = await Axios('/api/ingredients');
    return res.data.data;
  } catch (e) {
    console.log(e);
  }
};
