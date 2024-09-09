import {router} from "../router/index.jsx";

export const gotoLib = {
  async home() {
    await router.navigate("/")
  },
  async login() {
    await router.navigate("/login")
  },
  async register() {
    await router.navigate("/register")
  }
}
