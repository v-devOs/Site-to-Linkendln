import { AppBar, Box, Drawer, IconButton, List, ListItem, Typography } from '@mui/material'

import MenuIcon from '@mui/icons-material/MenuOutlined'
import { headerNavbar } from './constans'
import { useState } from 'react'

export const Navbar = () => {

  const [openDrawe, setOpenDrawe] = useState(false)

  const onToogleDrawer = ( ) => {
    setOpenDrawe( current => !current)
  }

  return (
    <>
      <IconButton onClick={onToogleDrawer}>
        <MenuIcon/>
      </IconButton>

      <Drawer
        open={openDrawe}
        anchor='left'
        onClose={ onToogleDrawer }
        sx={{ backdropFilter: 'blur(4px)', transition: 'all 0.5s ease-out'}}
      >

      <Box sx={{ width: 250, paddingTop: 5}}>
        <List>
          {
            headerNavbar.map( header => (
              <ListItem key={header.sectionName}>
                <Typography>{header.sectionName}</Typography>
              </ListItem>
            ))
          }
        </List>
      </Box>


      </Drawer>
    </>
  )
}
