import { Axios } from '../lib/Axios';
export const getValidation = async () => {
  try {
    const res = await Axios('/api/validate/token');
    return res.data.data;
  } catch (e) {
    console.log(e);
  }
};
