import { Axios } from '../lib/Axios';

export const IsBefore = async () => {
  try {
    const { data } = await Axios('/api/validate/time');
    return data;
  } catch (e) {
    alert(e.response);
  }
};
