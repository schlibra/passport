import TopBar from "../component/TopBar.jsx";
import { Button, Container, Stack, Typography} from "@mui/material";
import {useState} from "react";
import SideBar from "../component/SideBar.jsx";
import Main from "../component/Main.jsx";
import {gotoLib} from "../lib/gotoLib.js";

export default function HomeView () {
  const [showSideBar, setShowSideBar] = useState(false)
  return (
    <Container>
      <TopBar title="首页" onOpenMenu={()=>setShowSideBar(v=>v=true)}/>
      <SideBar title="首页" open={showSideBar} onClose={()=>setShowSideBar(v=>v=false)} />
      <Main>
        <Typography variant="h3" component="div">星辰通行证</Typography>
        <Typography sx={{ mt: 1 }} variant="subtitle1" component="div">一个统一的账号，可在各网站及应用中快速登录，保持登录状态。</Typography>
        <Stack sx={{ mt: 2 }} spacing={2} direction="row">
          <Button variant="contained" size="large" onClick={gotoLib.login}>登录账号</Button>
          <Button variant="contained" size="large">注册账号</Button>
          <Button variant="contained" size="large">查看所有应用</Button>
        </Stack>
      </Main>
    </Container>
  )
}
