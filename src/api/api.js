import * as axios from 'axios';
import qs from 'qs';

export const instance = axios.create({
    withCredentials: true,
    baseURL: "http://193.124.114.46:3001",
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
});


 

// export const authApi = {
//   registration() {
//     const data = {"username":"jetreal", "password":"serjpwd", "email":"bystryi.sokol@gmail.com"};
//       const option = {
//         url: '/users',
//         method: 'POST',
//         data: qs.stringify(data),
//       }; 
//     return instance(option)
//     },

  export const getToken = (data) => {
    // const data = {"email":"jet@gmail.com", "password":"jet333"};
      const option = {
        url: '/sessions/create',
        method: 'POST',
        data: qs.stringify(data),
      }; 
    return instance(option)
  }

//     getTransaction(token) {
//       const option = {
//         url: '/api/protected/transactions',
//         method: 'GET',
//         headers: {
//           Authorization: "bearer " + token.id_token
//         }
//       }; 
//     return instance(option)
//     },

//     getLoggedUserInfo(token) {
//       const option = {
//         url: '/api/protected/user-info',
//         method: 'GET',
//         headers: {
//           Authorization: "bearer " + token.id_token
//         }
//       }; 
//       return instance(option)
//     },

//     getFilteredUserList(token) {
//       const data = {};
//       const option = {
//         url: '/api/protected/users/list',
//         method: 'POST',
//         headers: {
//           Authorization: "bearer " + token.id_token
//         },
//         data: qs.stringify(data),
//       }; 
//     return instance(option)
//     }
// }