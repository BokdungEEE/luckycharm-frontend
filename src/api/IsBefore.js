import { Axios } from '../lib/Axios';

export const IsBefore = async () => {
  try {
    const { data } = await Axios('/api/validate/time');
    return data;
  } catch (e) {
    alert('잘못된 요청입니다.');
  }
};
