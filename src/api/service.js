import { Axios } from '../lib/Axios';

export default {
  /**
   * 오픈 전 마이페이지
   */
  beforeRoadMyPage() {
    try {
      return Axios({
        url: '/api/users/me',
        method: 'get',
      });
    } catch (e) {
      alert(e.response);
    }
  },

  /**
   * 오픈 후 마이페이지
   */
  afterRoadMyPage() {
    try {
      return Axios({
        url: '/api/users/me/after',
        method: 'get',
      });
    } catch (e) {
      alert(e.response);
    }
  },

  /**
   * 링크 공유
   */
  shareLink() {
    try {
      return Axios({
        url: '/api/users/me',
        method: 'get',
      });
    } catch (e) {
      alert(e.response);
    }
  },

  /**
   * 힌트 보기
   */
  roadHint() {
    try {
      return Axios({
        url: 'api/send/message',
        method: 'get',
      });
    } catch (e) {
      alert(e.response);
    }
  },
};
