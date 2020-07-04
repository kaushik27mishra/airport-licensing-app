import axios from 'axios'

api = () => {
  return axios.create({
    baseURL: '',
    headers: {
      'Authorization': localStorage.getItem('id_token')
    }
  });
}

export default api;