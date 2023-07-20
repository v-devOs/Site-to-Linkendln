import NextLink from 'next/link'
import { Button, Divider, Link, List, ListItem, ListItemButton, Toolbar, Typography } from '@mui/material';


import { navbarHeaders } from '../../data/nav-headers';
import { useRouter } from 'next/router';




export const SideMenu = () => {

  const router = useRouter()

  return (
    <div className='container-side-menu'>
      <Toolbar/>

      <Typography 
        variant='h5' 
        component='h5' 
        fontFamily='serif'
        ml={2}
        >v-Devos</Typography>

      <List sx={{ display: { xs: 'flex', md: 'block' }}}>

        {
          navbarHeaders.map( header => (
            <ListItemButton key={header.sectionName} sx={{ mt: 2, borderRadius: '5px' }} className={router.route === header.linkPage ? 'actual-section' : ''}>
                <NextLink href={header.linkPage} passHref>
                  <Link component='span'>
                    <Typography key={header.linkPage}>{header.sectionName}</Typography>
                  </Link>
                </NextLink>
            </ListItemButton>
          ))
        }
      </List>
    </div>
  )
}
