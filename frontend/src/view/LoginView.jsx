import {Button, Container, Link, Stack, TextField, Typography} from "@mui/material";
import TopBar from "../component/TopBar.jsx";
import SideBar from "../component/SideBar.jsx";
import {useState} from "react";
import Main from "../component/Main.jsx";
import {gotoLib} from "../lib/gotoLib.js";

export default function LoginView() {
  const [ showSideBar, setShowSideBar ] = useState(false)
  const [ username, setUsername ] = useState("")
  const [ password, setPassword ] = useState("")
  const handleLogin = () => {
    console.log(username, password)
  }
  return (
    <Container>
      <TopBar title="用户登录" onOpenMenu={()=>setShowSideBar(true)} />
      <SideBar title="用户登录" onClose={()=>setShowSideBar(false)} open={showSideBar} />
      <Main>
        <Stack spacing={2}>
          <Typography variant="h3" component="div" align="center">用户登录</Typography>
          <Typography variant="subtitle1" component="div" align="center">登录到你的账号进行更多操作</Typography>
          <TextField label="用户名" value={username} onChange={e=>{setUsername(e.target.value);
            console.log(username)}} />
          <TextField label="密码" type="password" value={password} />
          <Button variant="contained" size="large" onClick={handleLogin}>登录</Button>
          <Stack direction="row" alignItems="inherit">
            <Button variant="text" size="large" onClick={gotoLib.register}>还没有账号，去注册</Button>
            <Typography component="div" sx={{ flexGrow: 1}}></Typography>
            <Button variant="text" size="large">忘记密码，去重置</Button>
          </Stack>
        </Stack>
      </Main>
    </Container>
  )
}
