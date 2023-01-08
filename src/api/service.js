import { Axios } from '../lib/Axios';

export default {
  //오픈 전 마이페이지
  beforeRoadMyPage() {
    return Axios({
      url: '/api/users/me',
      method: 'get',
    });
  },

  //오픈 후 마이페이지
  afterRoadMyPage() {
    return Axios({
      url: '/api/users/me/after',
      method: 'get',
    });
  },

  //링크 공유
  shareLink() {
    return Axios({
      url: '/api/users/me',
      method: 'get',
    });
  },
};
