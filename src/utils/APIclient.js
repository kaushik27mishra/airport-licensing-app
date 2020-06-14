import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: '',
    headers: {
      'Authorization': localStorage.getItem('id_token')
    }
  });
}