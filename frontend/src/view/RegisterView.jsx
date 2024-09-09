import {Button, Container, Link, Stack, TextField, Typography} from "@mui/material";
import TopBar from "../component/TopBar.jsx";
import SideBar from "../component/SideBar.jsx";
import {useState} from "react";
import Main from "../component/Main.jsx";
import {Form} from "react-router-dom";
import {gotoLib} from "../lib/gotoLib.js";

export default function RegisterView() {
  const [ showSideBar, setShowSideBar ] = useState(false)
  return (
    <Container>
      <TopBar title="用户注册" onOpenMenu={()=>setShowSideBar(true)} />
      <SideBar title="用户注册" onClose={()=>setShowSideBar(false)} open={showSideBar} />
      <Main>
        <Stack spacing={2}>
          <Typography variant="h3" component="div" align="center">用户注册</Typography>
          <Typography variant="subtitle1" component="div" align="center">注册一个新账号用于登录</Typography>
          <TextField label="用户名"/>
          <TextField label="密码" type="password" />
          <TextField label="确认密码" type="password" />
          <TextField label="昵称" />
          <TextField label="邮箱" type="email" />
          <Stack direction="row" spacing={2}>
            <TextField label="邮箱验证码" type="number" sx={{ flexGrow: 1}} />
            <Button variant="contained" size="large">发送验证码</Button>
          </Stack>
          <Button variant="contained" size="large">注册</Button>
          <Stack direction="row" alignItems="inherit">
            <Button variant="text" size="large" onClick={gotoLib.login}>已有账号，立即登录</Button>
            <Typography component="div" sx={{ flexGrow: 1}}></Typography>
            <Button variant="text" size="large">忘记密码，去重置</Button>
          </Stack>
        </Stack>
      </Main>
    </Container>
  )
}
