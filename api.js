import axios from 'axios';

import NavigationService from './NavigationService';

const api = axios.create({
  baseURL: 'http://localhost:4444',
});

api.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.status === 401) {
      //chame uma função para deslogar o usuário aqui
      NavigationService.navigate('SignedOut');
    }
  },
);

export default api;
