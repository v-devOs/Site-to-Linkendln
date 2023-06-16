import NextLink from 'next/link'
import { Button, Divider, Link, List, ListItem, Toolbar, Typography } from '@mui/material';


import { headerNavbar } from './constans';
import { useRouter } from 'next/router';


export const SideMenu = () => {

  const router = useRouter()

  return (
    <div style={{ margin: '0 10px'}}>
      <Toolbar/>

      <Typography 
        variant='h5' 
        component='h5' 
        fontFamily='serif'
        ml={2}
        >v-Devos</Typography>

      <List sx={{ display: { xs: 'flex', md: 'block'}}}>

        {
          headerNavbar.map( header => (
            <ListItem key={header.sectionName} >
              <Button variant='text' color='secondary' className={router.asPath === header.linkPage ? 'actual-section' : ''}>
                <NextLink href={header.linkPage} passHref>
                  <Link component='span'>
                    <Typography key={header.linkPage}>{header.sectionName}</Typography>
                  </Link>
                </NextLink>
              </Button>
            </ListItem>
          ))
        }
      </List>
    </div>
  )
}
