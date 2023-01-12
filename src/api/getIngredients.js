import { Axios } from '../lib/Axios';

export const getIngredients = async () => {
  try {
    const { data } = await Axios.get(`/api/ingredients`);
    return data.data;
  } catch (e) {
    alert('잘못된 요청입니다.');
  }
};
