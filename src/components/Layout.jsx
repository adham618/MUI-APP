import { Drawer, Typography } from "@mui/material"
import { Box } from "@mui/system"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { AddCircleOutlineOutlined, SubjectOutlined } from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router-dom";
const drawerWidth = 240
const Layout = ({ children }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const classes = {
    page: {
      background: '#f9f9f9',
      width: '100%',
    },
    drawer: {
      width: drawerWidth,
      ".MuiDrawer-paper": {
        width: drawerWidth,
      },
    },
    root: {
      display: 'flex'
    },
    active: {
      background: '#f4f4f4'
    }
  }
  const menuItems = [
    {
      text: 'My Notes',
      icon: <SubjectOutlined color="secondary" />,
      path: "/"
    },
    {
      text: 'Create Notes',
      icon: <AddCircleOutlineOutlined color="secondary" />,
      path: "/create"
    },
  ]
  return (
    <Box sx={classes.root}>
      {/* app bar */}
      {/* side drawer */}
      <Drawer
        sx={classes.drawer}
        variant="permanent"
        anchor="left"
      >
        <div>
          <Typography variant="h5">
            Ninja Note
          </Typography>
        </div>

        {/* links/list section */}
        <List>
          {menuItems.map(item => (
            <ListItem
              button
              key={item.text}
              onClick={() => navigate(item.path)}
              sx={location.pathname == item.path ? classes.active : null}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      {/* main content */}

      <div sx={classes.page}>
        {children}
      </div>
    </Box>
  )
}

export default Layout
