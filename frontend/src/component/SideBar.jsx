import {
  AppBar, Divider,
  Drawer, IconButton,
  List,
  ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography,

} from "@mui/material";
import { Menu as IconMenu, Home, Apps, Info } from '@mui/icons-material'
import {gotoLib} from "../lib/gotoLib.js";

export default function SideBar({ title, open, onClose }) {
  const menuList = [
    {
      icon: <Home />,
      text: "首页",
      link: "/",
      onclick: gotoLib.home
    },
    {
      icon: <Apps />,
      text: "应用列表"
    },
    {
      line: true
    },
    {
      icon: <Info />,
      text: "关于我们"
    }
  ]
  const list = [];
  menuList.forEach(item=>{
    if (item.line) {
      list.push(
        <Divider />
      )
    } else {
      list.push(
        <ListItem>
          <ListItemButton onClick={item.onclick}>
            <ListItemIcon>
              {item.icon}
            </ListItemIcon>
            <ListItemText>
              {item.text}
            </ListItemText>
          </ListItemButton>
        </ListItem>
      )
    }
  })
  return (
    <Drawer sx={{ pl: 0}} open={open} anchor="left" onClose={onClose} variant="persistent">
      <AppBar position="relative">
        <Toolbar>
          <IconButton onClick={onClose}
                      color="inherit" edge="start"
                      size="large">
            <IconMenu />
          </IconButton>
          <Typography sx={{ ml:2, mr: 2 }} component="div" variant="h6">{title}</Typography>
        </Toolbar>
      </AppBar>
      <List>
        { list }
      </List>
    </Drawer>
  )
}
