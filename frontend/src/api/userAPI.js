import axios from "axios";
import {urls} from "./urls.js";

export const userAPI = {
  userLogin(username, password) {
    axios.post(urls.userLogin, {
      username,
      password,
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }
}
