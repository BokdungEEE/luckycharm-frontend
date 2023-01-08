import { Axios } from '../util/axios.js';

export default {
  //오픈 전 마이페이지
  createMyPage(plateCnt, ingredientCnt, before) {
    return Axios({
      url: '/api/user/me',
      method: 'get',
      data: {
        plateCnt,
        ingredientCnt,
        before,
      },
    });
  },

  //오픈 후 마이페이지
  afterMyPage(content, nickName, ingredient) {
    return Axios({
      url: '/api/users/me/after',
      method: 'get',
      data: [{ content, nickName, ingredient }],
    });
  },

  //재료 비율 확인
  roadIngredients(sea_weed, green_onion, water, meet, egg, rice) {
    return Axios({
      url: '/api/ingredients',
      method: 'post',
      data: {
        sea_weed,
        green_onion,
        water,
        meet,
        egg,
        rice,
      },
    });
  },

  //메세지 보내기
  messagePost(content, ingredient, nickName) {
    return Axios({
      url: 'api/posts/${uuid}',
      method: 'post',
      data: {
        content,
        ingredient,
        nickName,
      },
    });
  },

  //링크 공유
  sharedLink(link) {
    return Axios({
      url: '/api/users.me',
      method: 'get',
      data: {
        link,
      },
    });
  },
};
