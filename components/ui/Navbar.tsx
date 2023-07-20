import { useContext } from 'react';

import NextLink from 'next/link'

import { AppBar, Box, IconButton, Link, Toolbar, Typography } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

import { UIContext } from '@/context/ui';

import { navbarHeaders } from '@/data';


export const Navbar = () => {

  const { toggleSideMenu} = useContext(UIContext)

  return (
    <AppBar sx={{ background: '#101010', position: 'fixed'}}>
      <Toolbar>

        <NextLink passHref href='/'>
          <Link component='span'>
            <Typography>Uriel Galindo | v-DeVos</Typography>
          </Link>
        </NextLink>

        <Box sx={{ flex: 1}}></Box>

        <Box sx={{ display: {xs: 'none', md:'flex'}}}>

          {
            navbarHeaders.map( header => (
              <NextLink style={{ marginRight: 15}} passHref key={header.sectionName} href={header.linkPage}>
                <Link component='span'>
                  <Typography>{header.sectionName}</Typography>
                </Link>
              </NextLink>
            ))
          }
        </Box>
      
      <IconButton 
        onClick={ toggleSideMenu }
        sx={{ display: {xs: 'flex', md: 'none'}}}>
        <MenuOutlinedIcon/>
      </IconButton>

        
      </Toolbar>
    </AppBar>
  )
}
