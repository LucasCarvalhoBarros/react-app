import fetch from 'isomorphic-fetch';
import {some, isEqual, intersection} from 'lodash';
export const API_URL = process.env.API_URL;

const grantType = {
  password: 'password',
  refresh: 'refresh_token'
};

const Auth = {

  handleLoginData(data) {
    const evaToken = {
      accessToken: data.access_token,
      userInfo: data.additionalInformation
    };
    localStorage.setItem('note-token', JSON.stringify(evaToken));
    return {success: true};
  },

  login(user, password) {
    if(user == 'admin' && password == '123'){
      const userInfo = {
        login: user,
        name: 'Lucas'
      }
      const data = {
        userInfo:userInfo,
        accessToken:'123_lucas_123'
      }

    this.handleLoginData(data);
    }
  },

  logout() {
    localStorage.removeItem('eva-token');
  },

  getLoggedUser() {
    return this.getParsedToken().userInfo;
  },

  isLoggedIn() {
    return !!localStorage.getItem('eva-token') && !this.tokenExpired();
  }
};

export default Auth;
