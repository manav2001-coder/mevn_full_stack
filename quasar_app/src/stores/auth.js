import { defineStore } from 'pinia';
import axios from 'axios'

axios.defaults.withCredentials = true
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.delete['Content-Type'] = 'application/json';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

export const authStore = defineStore('auth', {
  state: () => ({
    username:"",
    is_logged_in:false,
  }),

  actions: {
    setLoginSession(data) {
      this.username = data.username;
      this.is_logged_in = true
    },
    destroyLoginSession(){
        this.username = ""
        this.is_logged_in = false
    }
  },
});
