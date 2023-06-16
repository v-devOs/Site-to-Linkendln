import NextLink from 'next/link'
import { Button, Divider, Link, List, ListItem, Toolbar, Typography } from '@mui/material';


import { headerNavbar } from './constans';
import { useRouter } from 'next/router';


export const SideMenu = () => {

  const router = useRouter()


  return (
    <div>
      <Toolbar/>

      <List>
        <Typography variant='h6' component='h6' mb={2}>v-Devos</Typography>
        <Divider/>

        {
          headerNavbar.map( header => (
            <ListItem key={header.sectionName}>
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
