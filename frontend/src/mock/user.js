import Mock from 'mockjs'

export const user = Mock.mock("/api/user/login", "post", {
  code: 200,
  msg: "登录成功",
  token: "*******"
})
