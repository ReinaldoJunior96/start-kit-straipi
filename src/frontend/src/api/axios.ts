import axios from 'axios';

const API_URL = 'http://localhost:1337/api';

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    // Adicione o Bearer Token aqui
    Authorization: `Bearer c150b8c6722a92d20b0187a597fafd304b824eb9eb13273f55376a227b684f0597c5745032777941ef008f03b3324d51325982408512f13e0948a0ea8c253f68ecb5729a66c6c17a31b09aa3093181c6d8d350bb82210fcd6447a96e077bb8adaf928c302c9dd0a54f052d17c83dea49e4c9be56d1e6b6388f4b2977a9083856`
  }
});
