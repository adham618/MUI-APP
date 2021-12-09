import { Drawer, Typography } from "@mui/material"
import { Box } from "@mui/system"
const drawerWidth = 240
const Layout = ({ children }) => {
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
    }
  }
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

      </Drawer>
      {/* main content */}

      <div sx={classes.page}>
        {children}
      </div>
    </Box>
  )
}

export default Layout
